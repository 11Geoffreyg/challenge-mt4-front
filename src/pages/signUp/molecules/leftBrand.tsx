import React from "react"
import styled from "styled-components";
import { color } from "../../../styles/const";
import image from "../../../assets/Maskot.svg";

export const LeftBrand = () => {
    return (
        <LeftBrandContent>
            <img src={image} alt="" />
            <MainText>TRY YOU SGBDR KNOWLEDGE</MainText>
            <SecondText>WITH OUR CHALLENGE</SecondText>
        </LeftBrandContent>
    );
}

const LeftBrandContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    background-color: ${color.violetLight};
`;

const MainText = styled.p`
    padding: 0;
    margin: 0;
    color: ${color.light.PureWhite};
`;

const SecondText = styled.p`
    padding: 0;
    margin: 0;
    color: ${color.light.PureWhite};
`;

