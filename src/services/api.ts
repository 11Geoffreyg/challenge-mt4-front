// @ts-nocheck
export const SignIn = (userInfo: any) => {
    return fetch("http://localhost:5050/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
    .then((resp) => resp.json())
    .then(data => localStorage.setItem('accessToken', data.accessToken));
};

export const LogIn = (userInfo: any) => {
    return fetch("http://localhost:5050/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
    .then((resp) => {
        if(!resp.ok) throw new Error("bad");
        resp.json();
    })
    .then((data) => localStorage.setItem('accessToken', data.accessToken));
};
