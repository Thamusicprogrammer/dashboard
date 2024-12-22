import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-mode");
    };

    // Toggle profile dropdown
    const toggleProfileDropdown = () => {
        setShowProfileDropdown((prevState) => !prevState);
    };

    return (
        <header className="header">
            {/* ------search bar------ */}
            <>

                <div className="InputContainer">
                    <input
                        placeholder="Search"
                        id="input"
                        className="input"
                        name="text"
                        type="text"
                    />
                    <label className="labelforsearch" htmlFor="input">
                        <svg className="searchIcon" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </label>
                </div>
            </>


            <div className="header-icons">
                <h2><strong className="header-title">Welcome Admin</strong></h2>
                {/* -----light dark mode-------- */}
                {/* <div className="container" >
                    <input type="checkbox" name="checkbox" id="checkbox" onClick={toggleDarkMode} aria-label="Toggle dark mode" />
                    <label htmlFor="checkbox" className="label">
                        {" "}
                    </label>
                </div> */}
                <>
                    <label className="ui-switch">
                        <input type="checkbox"  onClick={toggleDarkMode} aria-label="Toggle dark mode" />
                        <div className="slider">
                            <div className="circle" />
                        </div>
                    </label>
                </>


                {/* Profile Avatar with Dropdown */}
                <div className="icon-container">
                    <button
                        className="profile-avatar"
                        onClick={toggleProfileDropdown}
                        aria-label="Profile menu"
                    >
                        <Image
                            width={32}
                            height={32}
                            src="/default avatar.jpg"
                            alt="Profile Avatar"
                            className="avatar"
                        />
                    </button>
                    {showProfileDropdown && (
                        <ul className="dropdown-menu profile-dropdown">
                            <li><strong>Admin</strong></li>
                            <li><FontAwesomeIcon icon={faUser} /> Profile</li>
                            <li><FontAwesomeIcon icon={faSignOutAlt} /> LogOut</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
