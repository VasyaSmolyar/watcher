import React, { useState } from "react";

import './styles.css';

const Main = () => {
    const [roomId, setRoom] = useState("");
    const [nick, setNick] = useState("");

    return (
        <div className="main-container">
            <div className="wrapper-create">
                <form className="create">
                    <input className="create-input" type="text" placeholder="Room name" value={roomId} onChange={(event) => setRoom(event.target.value)} />
                    <input className="create-input" type="text" placeholder="Nickname" value={nick} onChange={(event) => setNick(event.target.value)} />
                    <input className="create-button" type="submit" value="сreate!!1" />
                </form>
            </div>
        </div>
    )
}

export default Main;