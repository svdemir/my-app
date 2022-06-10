import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUserSession } from '../Utils/Common';

function Login() {
    let navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (userName === "admin" && password === "admin") {
            setUserSession("admin tokeni", "admin");
            navigate("/liste", { replace: true });
        } else {
            setUserName("");
            setPassword("");
        }
    }

    const handleLoginFake = () => {
        setUserSession("token değeri", "mehmet");
        navigate("/liste", { replace: true });
    }

    return (
        <>
            <div id="login">
                <h3 class="text-center text-white pt-5">Login form</h3>
                <div class="container">
                    <div id="login-row" class="row justify-content-center align-items-center">
                        <div id="login-column" class="col-md-6">
                            <div id="login-box" class="col-md-12">
                                <h3 class="text-center text-info">Login</h3>
                                <div class="form-group">
                                    <label for="username" class="text-info">Username:</label><br />
                                    <input type="text" name="username" id="username" class="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br />
                                    <input type="password" name="password" id="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-info btn-md mx-5 my-4" onClick={handleLogin}>Login</button>
                                    <button class="btn btn-success btn-md my-4" onClick={handleLoginFake}>Fake Login</button>
                                </div>
                                <div id="register-link" class="text-right">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}

export default Login