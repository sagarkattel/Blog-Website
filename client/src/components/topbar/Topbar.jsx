import { Link } from "react-router-dom";
import "./topbar.css";
import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
// import { ImProfile } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

const Topbar = () => {
    const user=false;
    return(
        <div className="top">
            <div className="topLeft">
            <AiFillFacebook className="topIcon"/>
            <FaInstagramSquare className="topIcon" />
            <FaTwitterSquare className="topIcon"/>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
            {user?(
                <Link className="link" to="/settings">
                    <img
                    className="topImg"
                     src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </Link>
            ):(
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">REGSITER</Link>
                    </li>
                </ul>
            )}
            <FaSearch />
            </div>
        </div>
    );
}

export default Topbar;