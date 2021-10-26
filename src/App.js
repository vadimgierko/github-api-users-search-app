import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from "./components/Info";
import Header from './components/Header';
import HomePage from './components/HomePage';

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
            <Header
                windowSize={windowSize}
                handleChange={handleChange}
                handleClick={handleClick}
            />
            <div>
            <Switch>
                <Route exact path="/">
                    <HomePage windowSize={windowSize} />
                </Route>
                <Route path="/user-profile">
                    <div style={{marginTop: `${windowSize > 610 ? "70px" : "110px"}`}}>
                        <Info userName={userName} />
                    </div>
                </Route>
            </Switch>
            
            </div>
        </div>
    
  );
}