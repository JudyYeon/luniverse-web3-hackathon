import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const InputBox = styled.div`
    position: absolute;
    left: calc(50% - 15rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.light};
    padding: .3rem;
    width: 30rem;
    border-radius: 0.5rem;
    transition: all 0.25s ease;

    :has(input:focus) {
        box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primary};
    }
`;

export const SearchInput = styled.input`
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    transition: box-shadow 0.3s ease;
    color: ${({ theme }) => theme.color.dark};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    :focus {
        outline: none;
    }
`;

export const SearchBtn = styled(BsSearch)`
    width: 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.dark};
    cursor: pointer;

	&:hover {
		transform: scale(1.1);
		color: ${({theme}) => theme.color.error};
	}

	&:active {
        color: ${({theme}) => theme.color.success};
        transform: translateY(0.2rem) scale(1.1);
    }
`;
