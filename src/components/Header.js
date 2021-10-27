import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ handleChange, handleClick}) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
            <div className="container">
                <span className="navbar-brand mb-0 h1">
                    <i className="bi bi-github me-2" />
                    <Link
                        to="/"
                        className="text-reset"
                        style={{textDecoration: "none"}}
                    >GitHub API Users Search App</Link>
                </span>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded={isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? "collapse" : null} navbar-collapse `} id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={isNavCollapsed ? null : () => handleNavCollapse() }>About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            type="text"
                            placeholder="github user's name here"
                            className={isNavCollapsed ? "form-control me-2" : "form-control me-2"}
                            onChange={(e) => handleChange(e)} 
                        />
                        <Link
                            to="/user-profile"
                            type="button"
                            className={isNavCollapsed ? "btn btn-primary" : "btn btn-primary"}
                            onClick={() => {
                                handleClick();
                                if (!isNavCollapsed) {
                                    handleNavCollapse();
                                }
                            }}
                        >
                            <i className="bi bi-search"></i>
                        </Link>     
                    </form>           
                </div>
            </div>
        </nav>
    );
}