import React from "react"
import { LeftBrand } from "../../components/molecules/leftBrand";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { TextField, Button } from '@mui/material';
import styled from "styled-components";

export const SignUp = () => {
    return (
        <SignUpContent>
            <LeftBrand/>
            <InputContainer>
                <div>
                    <p>Hello welcome</p>
                    <p>Please enter your details !</p>
                </div>
                <TextField 
                    label="Name"
                    variant="standard"
                />
                <TextField 
                    label="Email"
                    variant="standard"
                />
                <TextField 
                    label="Password"
                    variant="standard"
                    type="password"
                />
                <TextField 
                    label="Confirm Password"
                    variant="standard"
                    type="password"
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