import React from "react";
import LunieImg from "/assets/Lunie.png";
import styled from "styled-components";

const Main = styled.main`
	height: calc(100vh - 5rem);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
const Title = styled.h1`
	font-size: 4rem;
`;
const Description = styled.h2`
	font-size: 1.5rem;
`;
const HomeImg = styled.img`
	width: 20rem;
	object-fit: cover;
`;

const HomePage = () => {
	return (
		<Main>
			<Title> Luniverse Web3 Day </Title>
			<Description>
				미션을 완료하신 분은 컨트랙트 주소를 검색한 화면을 보여주세요!
			</Description>
			<HomeImg src={LunieImg} />
		</Main>
	);
};

export default HomePage;
