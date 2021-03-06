import React, { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom";
import { LeftBrand } from "../../components/molecules/leftBrand";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { TextField, Button } from '@mui/material';
import styled from "styled-components";
import { SignIn } from "../../services/api";
import { color } from "../../styles/const";
import { styled as MUIStyled } from '@mui/material/styles';

export const SignUpPage = () => {
    let [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        promotion_id: 1
    });
    let [confirmPassword, setConfirmPassword] = useState("");
    let [isError, setIsError] = useState(false);

    const checkInput = () => {
        for (const info in newUser) {
            if (newUser[info as keyof typeof newUser] === "") return false
        }
        return true
    }

    const checkPassword = () => {
        const passwordEqual = newUser.password === confirmPassword;
        const notNull = !!newUser.password && !!confirmPassword;

        return passwordEqual && notNull;
    }

    const handleChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewUser(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    let navigate = useNavigate();
    const HandleSubmit = async() => {
        SignIn(newUser)
            .then(() => {
                navigate("../configuration");
            })
            .catch((err) => setIsError(true))
    };
    return (
        <SignUpContent>
            <LeftBrand/>
            <InputContainer>
                <div>
                    <p>Hello welcome</p>
                    <p>Please enter your details !</p>
                    {isError && <p>Bad Combination please retry !</p>}
                </div>
                <TextField 
                    label="First name"
                    variant="standard"
                    name="first_name"
                    onChange={handleChange}
                    color="secondary"
                />
                <TextField 
                    label="Family name"
                    variant="standard"
                    name="last_name"
                    onChange={handleChange}
                    color="secondary"
                />
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
                    type="password"
                    name="password"
                    onChange={handleChange}
                    color="secondary"
                />
                <TextField 
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    onChange={handleChangeConfirm}
                    color="secondary"
                />
                <BootstrapButton
                    disabled={ !checkPassword() || !checkInput() }
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={ HandleSubmit }
                >Continue</BootstrapButton>
                <Text>I already have an account <Link to="/login">Sign in</Link></Text>
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