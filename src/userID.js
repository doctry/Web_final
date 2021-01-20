const UserID = () => {
    return localStorage.getItem("account");
}

const userID = UserID()

export default userID;
