export const PostImage = (userInfo: any) => {
    return fetch("https://userInfo.lol", {
    headers: {
        Authorization: ``,
    },
        method: "POST",
        body: userInfo,
    }).then((resp) => resp.json());
};
