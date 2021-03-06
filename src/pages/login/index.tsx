import React, { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom";
import { LeftBrand } from "../../components/molecules/leftBrand";
import { TextField, Button } from '@mui/material';
import ArrowForward from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { LogIn } from "../../services/api";
import { color } from "../../styles/const";
import { styled as MUIStyled } from '@mui/material/styles';

export const LogInPage = () => {
    let [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });
    let [isError, setIsError] = useState(false);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginInfo(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    
    let navigate = useNavigate();
    const HandleSubmit = () => {
        LogIn(loginInfo)
            .then(() => {
                navigate("../configuration")
            })
            .catch((err) => setIsError(true))
    };

    return (
        <SignUpContent>
            <LeftBrand/>
            <InputContainer>
                <div>
                    <p>Welcome Back !</p>
                    <p>Please enter your details !</p>
                    {isError && <p>Bad Combination please retry !</p>}
                </div>
                <TextField 
                    label="Email"
                    variant="standard"
                    name="email"
                    onChange={handleChange}
                    color="secondary"
                />
                <TextField 
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    color="secondary"
                />
                <BootstrapButton
                    disabled={!(!!loginInfo.email && !!loginInfo.password)}
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={ HandleSubmit }
                >Continue</BootstrapButton>
                <Text>I don???t have account <Link to="/">Sign up</Link></Text>
            </InputContainer>
        </SignUpContent>
    );
}

const BootstrapButton = MUIStyled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    marginTop: 20,
    backgroundColor: color.pinkLight,
    '&:hover': {
      backgroundColor: color.pinkLightHovered,
      boxShadow: 'none',
    },
  });
  

const Text = styled.div`
    margin: 0;
    color: ${color.medium.Smoke};
`


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
