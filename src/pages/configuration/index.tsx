import React from "react"
import styled from "styled-components";
import { color } from "../../styles/const"

export const ConfigurationPage = () => {
    return (
        <ConfigurationContent>
            <h1>Configuration</h1>
        </ConfigurationContent>
    );
}

const ConfigurationContent = styled.div`
    background-color: ${color.violetLight}
`;
