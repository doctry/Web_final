function userID() {
    const user_id = localStorage.getItem("account");
    console.log(userID)

    return user_id;
}

export default userID;
