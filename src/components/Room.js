import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
    let { roomId } = useParams();

    return (
        <div>
            <h1>Room ID: {roomId}</h1>;
        </div>
    )
}

export default Room;