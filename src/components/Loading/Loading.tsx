import React from "react";
import { Container, Spinner } from "./styled";

interface Props {
    size?: number;
    color?: string;
}

const Loading: React.FC<Props> = ({ size = 16, color }) => {
    return (
        <Container>
            <Spinner size={size} color={color}/>
        </Container>
    );
};

export default Loading;
