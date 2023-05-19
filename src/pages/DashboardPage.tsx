import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LineChartSection from "../components/LineChartSection";

import Overview from "../components/Overview";
import FTListTable from "../components/FTListTable";
import NFTListTable from "../components/NFTListTable/NFTListTable";
import { answer3, answer4 } from "../answers";
import axiosRequest from "../apis/axiosRequest";

const DashboardPage = () => {
	const { address } = useParams();

	const [recentActiveAccounts, recentTransactions] = useQueries({
		queries: [
			{
				queryKey: ["CONTRACT_ACTIVE_ACCOUNTS", "HOURLY", "24H", address],
				queryFn: () => {
					if (!address) return null;
					return axiosRequest({
						url: `/stats/hourly/contract/${address}/accounts`,
						method: "get",
						params: {
							...answer3,
						},
					});
				},
				enabled: !!address,
				retry: false,
				refetchOnWindowFocus: false,
			},
			{
				queryKey: ["CONTRACT_TRANSACTIONS", "DAILY", "24H", address],
				queryFn: () => {
					if (!address) return null;
					return axiosRequest({
						url: `/stats/daily/contract/${address}/transactions`,
						method: "get",
						params: {
							...answer4,
						},
					});
				},
				enabled: !!address,
				retry: false,
				refetchOnWindowFocus: false,
			},
		],
	});

	useEffect(() => {
		[recentActiveAccounts, recentTransactions].forEach((item) => {
			item.refetch();
		});
	}, [address]);

	return (
		<Container>
			{/* Balance and tables */}
			<Overview />
			<FTListTable />
			<NFTListTable />

			{/* Active Account Chart */}
			<LineChartSection
				data={recentActiveAccounts}
				title="Active Accounts Hourly Count"
			/>
			{/* Transactions Chart */}
			<LineChartSection
				data={recentTransactions}
				title="Transactions Daily Count"
			/>
		</Container>
	);
};

const Container = styled.main`
	${({ theme }) =>
		theme.components.container("column", "flex-start", "flex-start")};
	gap: 2rem;
`;

const Row = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "flex-start")}
	width: 100%;
	gap: 1rem;
	flex-wrap: wrap;
`;

export default DashboardPage;
