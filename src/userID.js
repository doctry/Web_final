const UserID = () => {
    const user_id = localStorage.getItem("account");
    console.log(user_id)

    return user_id;
}

const userID = UserID()

export default userID;
