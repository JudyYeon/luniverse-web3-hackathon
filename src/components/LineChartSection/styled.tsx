import styled from "styled-components";

export const Container = styled.section`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	min-width: 40rem;
	width: 50%;
	height: 20rem;
	border-radius: 1rem;
	padding: 2rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	grid-column: 3 span;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.25rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
	margin-bottom: 1rem;
`;

export const ErrorMessage = styled.h2`
	color: ${({ theme }) => theme.color.error};
	font-size: 1.25rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
