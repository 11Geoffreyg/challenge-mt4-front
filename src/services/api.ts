export const UserInfo = (userInfo: any) => {
    return fetch("https://userInfo.lol", {
        method: "POST",
        body: userInfo,
    }).then((resp) => resp.json());
};
