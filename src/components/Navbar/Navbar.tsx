import React from "react";
import { LogoImgSrc, LogoWords } from "./data";
import {
	Container,
	EmptyBox,
	Logo,
	LogoH1,
	LogoImg,
	LogoImgBox,
	Nav,
} from "./styled";
import SearchBox from "../SearchBox";

const Navbar = () => {
	return (
		<>
			<Container>
				<Nav>
					{/* Logo */}
					<Logo to="/">
						<LogoImgBox>
							<LogoImg src={LogoImgSrc} />
						</LogoImgBox>
						<LogoH1>{LogoWords}</LogoH1>
					</Logo>

					<SearchBox />
				</Nav>
			</Container>

			{/* EmptyBox to prevent overlapping */}
			<EmptyBox />
		</>
	);
};

export default Navbar;
