import React from "react"
import { TextField, Button } from '@mui/material';
import ArrowForward from "@mui/icons-material/ArrowForward";
import styled from "styled-components";

export const LogIn = () => {
    return (
        <SignUpContent>
            <InputContainer>
                <div>
                    <p>Welcome Back !</p>
                    <p>Peasee enter your details !</p>
                </div>
                <TextField 
                    label="Email"
                    variant="standard"
                />
                <TextField 
                    label="Password"
                    variant="standard"
                />
                <Button
                    disabled
                    variant="contained"
                    endIcon={<ArrowForward />}
                >Continue</Button>
            </InputContainer>
        </SignUpContent>
    );
}

const SignUpContent = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    padding: 20%;
`;
