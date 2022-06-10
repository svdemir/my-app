import React from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import { getToken, removeUserSession } from '../Utils/Common';
import PrivateRoute from '../Utils/PrivateRoute';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/login';
import Liste from '../pages/Liste';
import Liste2 from '../pages/Liste2';
import Liste3 from '../pages/Liste3';
import Admin from '../pages/Admin';
import Home from '../pages/Home';

function NavBar({ user }) {

    let navigate = useNavigate();

    const handleLogOut = () => {
        removeUserSession()
        navigate("/home", { replace: true });
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Uygulama</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to={"/home"}>Anasayfa</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to={"/liste"}>Liste (Rest Api)</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to={"/liste2"}>Liste (GraphQL Api)</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to={"/liste3"}>Liste (GraphQL Api Lazy)</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/about"}>Hakkında</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-danger" to={"/contact"}>İletişim</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/admin"}>Admin</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/login"}>Login</Link>
                            </li>
                            <li class="nav-item">
                                {
                                    getToken() ?
                                        <div>
                                            <button class="btn btn-warning ml-5 mt-1 btn-md" onClick={() => { handleLogOut() }}>Sign Out</button>
                                        </div> : <div></div>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes >
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/liste"
                    element={
                        <PrivateRoute>
                            <Liste />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/liste2"
                    element={
                        <PrivateRoute>
                            <Liste2 />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/liste3"
                    element={
                        <PrivateRoute>
                            <Liste3 />
                        </PrivateRoute>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={
                        <PrivateRoute>
                            <Contact />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    }
                />

                <Route path="/login" element={<Login />} />
            </Routes>


        </>
    );
}

export default NavBar;