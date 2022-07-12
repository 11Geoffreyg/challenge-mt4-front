import React from "react"

interface LogInProps {
    
}

const LogIn: React.FunctionComponent<LogInProps> = (props) => {
    return (
        //create a login page with material ui
        <div>
            <h1>Log In</h1>
            <form>
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
