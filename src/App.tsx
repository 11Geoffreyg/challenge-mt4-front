import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/signUp";
import { LogIn } from "./pages/login";
import { Configuration } from "./pages/configuration";

interface AppProps {
    
}

const App: React.FunctionComponent<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/configuration" element={<Configuration/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
