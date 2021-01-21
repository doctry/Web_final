import React from 'react';
import socket from "./../socket-io";

function Reservation() {
    const click_button = () => {
        socket.emit("addMember");
        console.log("增加成員")
    }

    return (
        <>
            <div>This is Reservation</div>
            <button onClick={click_button}>增加成員</button>
        </>
    );
}

export default Reservation;