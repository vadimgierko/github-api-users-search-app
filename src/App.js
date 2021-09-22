import {React, useState} from 'react';
import './App.css';
import Info from "./components/Info";

export default function App() {
  const [inputedName, setInputedName] = useState();
  const [userName, setUserName] = useState();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
              className={`navbar .form-inline bg-secondary pt-2 mt-n1 my-1 rounded justify-content-${windowSize > 610 ? "between" : "center"}`}
              style={{position: "fixed", top: "0", left: "15px", right: "15px", zIndex: 1}}
          >
              <div>
                  <span className="navbar-brand mb-0 mx-3 h1 text-white">
                      <i className="bi bi-github"></i> GitHub API Users Search App
                  </span>
              </div>
              <div>
                  <span><input type="text" placeholder="input github user's name" className="me-3" onChange={handleChange}></input></span>
                  <button type="button" className="btn btn-primary me-3" onClick={handleClick}><i className="bi bi-search"></i></button>
              </div>
          </div>
          <div style={{marginTop: `${windowSize > 610 ? "70px" : "110px"}`}}>
              <Info userName={userName} />
          </div>
      </div>
  );
}