import React from "react"
import { LeftBrand } from "./molecules/leftBrand";
import { color } from "../../styles/const";
import { TextField } from '@mui/material';
import styled from "styled-components";

export const SignUp = () => {
    return (
        <SignUpContent>
            <LeftBrand/>
            <TextField 
                label="Name"
            />
            <TextField 
                label="Email"
            />
            <TextField 
                label="Password"
            />
            <TextField 
                label="Confirm Password"
            />
        </SignUpContent>
    );
}

const SignUpContent = styled.div`
    display: flex;
`;