import { Link } from "react-router-dom";

export default function Header({ windowSize, handleChange, handleClick}) {
    return (
        <div
            className={`navbar .form-inline bg-secondary pt-2 mt-n1 my-1 rounded justify-content-${windowSize > 610 ? "between" : "center"}`}
            style={{position: "fixed", top: "0", left: "15px", right: "15px", zIndex: 1}}
        >
            <div>
                <span className="navbar-brand mb-0 mx-3 h1 text-white">
                    <i className="bi bi-github"></i> <Link to="/" className="text-reset">GitHub API Users Search App</Link>
                </span>
            </div>
            <div>
                <span><input type="text" placeholder="input github user's name" className="me-3" onChange={(e) => handleChange(e)}></input></span>
                <Link
                    to="/user-profile"
                    type="button"
                    className="btn btn-primary me-3"
                    onClick={handleClick}
                >
                    <i className="bi bi-search"></i>
                </Link>
            </div>
        </div>
    );
}