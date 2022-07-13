import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/signUp";
import { LogInPage } from "./pages/login";
import { ConfigurationPage } from "./pages/configuration";
import styled from "styled-components";
import { ChallengePage } from "./pages/challenge/index";

interface AppProps {
    
}

var accessToken = localStorage.getItem("accessToken");

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <GlobalStyle>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUpPage/>}/>
                <Route path="/login" element={<LogInPage/>}/>
                {accessToken &&  <Route path="/configuration" element={<ConfigurationPage/>}/>}
                <Route path="/challenge" element={<ChallengePage/>}/>
            </Routes>
        </BrowserRouter>
        </GlobalStyle>
    );
}

const GlobalStyle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export default App;
