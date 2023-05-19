import { useParams } from "react-router";
import Loading from "../Loading";
import {
	Column,
	ContentBox,
	ErrorMessage,
	H1,
	H2,
	H3,
	Row,
	Splitter,
} from "./styled";
import { FaEthereum } from "react-icons/fa";
import { ethers } from "ethers";
import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import axiosRequest from "../../apis/axiosRequest";
import { example, answer1, answer2 } from "../../answers";

const Overview = () => {
	const { address } = useParams();
	const [ethBalance, ftBalance, nftBalance] = useQueries({
		queries: [
			{
				queryKey: ["ETH_BALANCE", { pageNum: 1, rpp: 1 }],
				queryFn: () => {
					if (!address) return;
					if (example.type === "nft" || example.type === "ft") return;
					return axiosRequest({
						url: `accounts/${address}/balance`,
						method: "get",
						params: {
							...example,
						},
					});
				},
				enabled: !!address,
				retry: false,
				refetchOnWindowFocus: false,
			},
			{
				queryKey: ["FT_BALANCE", { pageNum: 1, rpp: 1 }],
				queryFn: () => {
					if (!address) return;
					if (answer1?.type !== "ft") return;
					return axiosRequest({
						url: `accounts/${address}/balance`,
						method: "get",
						params: {
							...answer1,
						},
					});
				},
				enabled: !!address,
				retry: false,
				refetchOnWindowFocus: false,
			},
			{
				queryKey: ["NFT_BALANCE", { pageNum: 1, rpp: 1 }],
				queryFn: () => {
					if (!address) return;
					if (answer2?.type !== "nft") return;
					return axiosRequest({
						url: `accounts/${address}/balance`,
						method: "get",
						params: {
							...answer2,
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
		[ethBalance, ftBalance, nftBalance].forEach((item) => {
			item.refetch();
		});
	}, [address]);

	return (
		<>
			<Column>
				<H3>Searched Address</H3>
				<H1>{address}</H1>
			</Column>
			<Splitter />
			<Row>
				<ContentBox className="eth-balance-box">
					<Column>
						<H3>ETH</H3>
						{ethBalance.isLoading && <Loading size={30} />}
						{ethBalance.isError && <ErrorMessage>Try Again</ErrorMessage>}
						{!ethBalance.isLoading && !ethBalance.isError && (
							<H2>
								<FaEthereum />
								{ethers.formatEther(ethBalance.data.data.items[0].amount)}
							</H2>
						)}
					</Column>
				</ContentBox>
				<ContentBox className="ft-balance-box">
					<Column>
						<H3>FT Assets</H3>
						{ftBalance.isLoading && <Loading size={30} />}
						{ftBalance.isError && <ErrorMessage>Try Again</ErrorMessage>}
						{!ftBalance.isLoading && !ftBalance.isError && (
							<H2>{ftBalance.data.data.count}</H2>
						)}
					</Column>
				</ContentBox>
				<ContentBox className="nft-balance-box">
					<Column>
						<H3>NFT Assets</H3>
						{nftBalance.isLoading && <Loading size={30} />}
						{nftBalance.isError && <ErrorMessage>Try Again</ErrorMessage>}
						{!nftBalance.isLoading && !nftBalance.isError && (
							<H2>{nftBalance.data.data.count}</H2>
						)}
					</Column>
				</ContentBox>
			</Row>
		</>
	);
};

export default Overview;
