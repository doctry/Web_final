const userID = () => {
    const user_id = localStorage.getItem("account");
    console.log(user_id)

    return user_id;
}

export default userID;
