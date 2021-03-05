import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import './styles.css';

const Login = () => {
    const [nick, setNick] = useState("");

    return (
        <div className="main-container">
        <div className="wrapper-create">
            <form className="create">
                <input className="create-input" type="text" placeholder="Nickname" value={nick} onChange={(event) => setNick(event.target.value)} />
                <ReCAPTCHA
                    sitekey="6LeysHIaAAAAAPGVHhNDY1r4r0yRHFdgA2whqRlx"
                    onChange={() => {}}
                />
                <input className="create-button" type="button" value="login" />
            </form>
        </div>
    </div>
    )
}

export default Login;