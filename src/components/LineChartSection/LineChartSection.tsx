import React, { useMemo } from "react";
import { Container, ErrorMessage, Title } from "./styled";
import { useTheme } from "styled-components";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";
import { UseQueryResult } from "@tanstack/react-query";
import Loading from "../Loading";

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

type Props = { data: UseQueryResult<ApiResult<Item[]>>; title: string };

const LineChartSection: React.FC<Props> = ({ data, title }) => {
	const theme: any = useTheme();
	const chartData = useMemo(() => data, [data]);

	if (!chartData) return <></>;
	if (chartData.isLoading) return <Loading />;

	return (
		<Container>
			<Title> {title} </Title>
			{chartData.isError && <ErrorMessage>Try again</ErrorMessage>}
			{!chartData.isError && chartData?.data && (
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={chartData.data.data.items}>
						<Line
							type="monotone"
							dataKey="count"
							stroke={theme.color.quaternary}
							strokeWidth={"3px"}
							activeDot={{ r: 5 }}
						/>
						<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
						<XAxis dataKey="date" />
						<YAxis />
						<Tooltip />
						<Legend />
					</LineChart>
				</ResponsiveContainer>
			)}
		</Container>
	);
};

export default LineChartSection;
