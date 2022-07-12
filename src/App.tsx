import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./pages/signUp";
import { LogInPage } from "./pages/login";
import { ConfigurationPage } from "./pages/configuration";

interface AppProps {
    
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUpPage/>}/>
                <Route path="/login" element={<LogInPage/>}/>
                <Route path="/configuration" element={<ConfigurationPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
