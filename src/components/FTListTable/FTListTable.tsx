import { useQuery, UseQueryResult } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { shortenAddress } from "../../utils";
import Loading from "../Loading";
import {
	ButtonBox,
	Column,
	Container,
	EmptyText,
	ErrorMessage,
	NextButton,
	PageNum,
	Pagination,
	PrevButton,
	Row,
	RowsPerPageSelect,
	TableBox,
	Title,
} from "./styled";
import { useParams } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { answer1 } from "../../answers";
import axiosRequest from "../../apis/axiosRequest";

interface Item {
	amount: number;
	asset: {
		contract: string;
		name: string;
		symbol: string;
		path: string;
		type: string;
	};
	tokens?: {
		id: string;
		name: string;
		uri: string;
	};
}

const FTListTable = () => {
	const { address } = useParams();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [pageNum, setPageNum] = useState(1);

	const queryResult: UseQueryResult<ApiResult<Item[]>> = useQuery({
		queryKey: ["FT_BALANCE", { pageNum: pageNum, rpp: rowsPerPage }],
		queryFn: () => {
			if (!address) return;
			if (answer1?.type !== "ft") return;
			return axiosRequest({
				url: `accounts/${address}/balance`,
				method: "get",
				params: {
					page: pageNum,
					rpp: rowsPerPage,
					...answer1,
				},
			});
		},
		enabled: !!address,
		retry: false,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		queryResult.refetch();
	}, [address, pageNum, rowsPerPage]);

	useEffect(() => {
		setPageNum(1);
		setRowsPerPage(10);
	}, [address]);

	function handleOnClickPageButton(e: React.MouseEvent) {
		const clickedButton = e.currentTarget.classList;
		if (clickedButton.contains("prev-button")) {
			setPageNum((prev) => prev - 1);
		}
		if (clickedButton.contains("next-button")) {
			setPageNum((prev) => prev + 1);
		}
	}

	function handleOnChangeRowsPerPage(e: React.ChangeEvent<HTMLSelectElement>) {
		setRowsPerPage(Number(e.target.value));
		setPageNum(1);
	}

	if (queryResult.isLoading) return <Loading size={60} />;

	return (
		<Container>
			<Title>Owned FT List</Title>
			<TableBox>
				<Column className="header">
					<Row>
						<h1>Name</h1>
					</Row>
					<Row>
						<h1>Symbol</h1>
					</Row>
					<Row>
						<h1>Contract Address</h1>
					</Row>
					<Row>
						<h1>Amount</h1>
					</Row>
				</Column>
				{queryResult.isError && (
					<Column>
						<ErrorMessage>Try again</ErrorMessage>
					</Column>
				)}
				{!queryResult.isError && !queryResult.data.data.count && (
					<EmptyText>Empty Items</EmptyText>
				)}
				{!queryResult.isError &&
					!!queryResult.data.data.count &&
					queryResult.data.data.items.map((item, index) => (
						<Column key={item.asset.name + index}>
							<Row>
								<h2>{item.asset.name || "unknown"}</h2>
							</Row>
							<Row>
								<h2>{item.asset.symbol || "unknown"}</h2>
							</Row>
							<Row>
								<h2>{shortenAddress(item.asset.contract)}</h2>
							</Row>
							<Row>
								<h2>{item.amount}</h2>
							</Row>
						</Column>
					))}
				<Column>
					<Pagination>
						<RowsPerPageSelect
							value={rowsPerPage}
							onChange={handleOnChangeRowsPerPage}
						>
							<option value="10">10</option>
							<option value="25">25</option>
							<option value="50">50</option>
							<option value="100">100</option>
						</RowsPerPageSelect>

						<ButtonBox>
							<PrevButton
								className="prev-button"
								onClick={handleOnClickPageButton}
								disabled={pageNum === 1}
							>
								<GrFormPrevious />
							</PrevButton>
							<PageNum>{pageNum}</PageNum>
							<NextButton
								className="next-button"
								onClick={handleOnClickPageButton}
							>
								<GrFormNext />
							</NextButton>
						</ButtonBox>
					</Pagination>
				</Column>
			</TableBox>
		</Container>
	);
};

export default FTListTable;
