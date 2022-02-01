// Has logo and name of application
// Has nav bar that links to My Profile, Classes, and Punchpasses
// Has logout button that logs out a user (removes token and pushes to Login)
import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/fitt_logo.png";
import "./../styles/Header.css";

const Header = (props) => {
    const pathname = window.location.pathname;
    const history = useHistory();

    const handleLogout = async () => {
        // delete this first setState and uncomment below when endpoint is setup
        props.setAuth({
            isAuth: false,
        });
        history.push("/login");
        // await asyncChangeWindow();

        // axiosWithAuth()
        // .post('/api/logout')
        // .then(res => {
        //   localStorage.removeItem('token');
        //   history.push('/login');
        //   setState({
        //     isAuth: false
        //   })
        // })
        // .catch(err => {
        //   console.log(err);
        // })
    };

    //   const handleSearchPunchpassesClick = () => {
    //     history.push('/search-punchpasses');
    //   }

    return (
        <header>
            <div className="nav-wrapper">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <nav>
                    {props.isAuth ? (
                        <Link
                            className={`${
                                pathname === "/profile" ? "active" : ""
                            }`}
                            to="/profile"
                        >
                            Profile
                        </Link>
                    ) : (
                        <div></div>
                    )}
                    {props.isAuth ? (
                        <Link
                            className={`${
                                pathname === "/classes" ? "active" : ""
                            }`}
                            to="/classes"
                        >
                            Classes
                        </Link>
                    ) : (
                        <div></div>
                    )}
                    {props.isAuth ? (
                        <Link
                            className={`${
                                pathname === "/punchpasses" ? "active" : ""
                            }`}
                            to="/punchpasses"
                        >
                            Punchpasses
                        </Link>
                    ) : (
                        <div></div>
                    )}
                    {props.isAuth ? (
                        <Link to="#" onClick={handleLogout}>
                            Logout
                        </Link>
                    ) : (
                        <div></div>
                    )}
                    {!props.isAuth ? (
                        <Link className="signup-1" to="/signup">
                            <button>Sign Up</button>
                        </Link>
                    ) : (
                        <div></div>
                    )}
                    {!props.isAuth ? (
                        <Link to="/login">Login</Link>
                    ) : (
                        <div></div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
