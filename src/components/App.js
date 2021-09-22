function App() {
    const [inputedName, setInputedName] = React.useState();
    const [userName, setUserName] = React.useState();
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
    });

    function handleChange(e) {
        setInputedName(e.target.value);
        console.log(inputedName);
    }
    
    function handleClick() {
        setUserName(inputedName);
    }

    return (
        <div className="container-fluid">
            <div
                className={`navbar .form-inline bg-secondary pt-2 mt-n1 text-white my-1 rounded justify-content-${windowSize > 610 ? "between" : "center"}`}
                style={{position: "fixed", top: "0", left: "15px", right: "15px", zIndex: 1}}
            >
                <div>
                    <span className="navbar-brand mb-0 h1 font-weight-bold text-white">
                        <i className="bi bi-github"></i> GitHub User Search App
                    </span>
                </div>
                <div>
                    <span><input type="text" placeholder="input github user's name" className="mr-3" onChange={handleChange}></input></span>
                    <button type="button" className="btn btn-primary mr-3" onClick={handleClick}><i className="bi bi-search"></i></button>
                </div>
            </div>
            <div style={{marginTop: `${windowSize > 610 ? "70px" : "110px"}`}}>
                <Info userName={userName} />
            </div>
        </div>
    );
}