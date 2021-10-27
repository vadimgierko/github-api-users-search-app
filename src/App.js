import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Info from "./components/Info";
import Header from './components/Header';
import HomePage from './components/HomePage';

export default function App() {
    const [inputedName, setInputedName] = useState();
    const [userName, setUserName] = useState();

    function handleChange(e) {
        setInputedName(e.target.value);
        console.log(inputedName);
    }
    
    function handleClick() {
        setUserName(inputedName);
    }

    return (
        <div className="App">
            <Header
                handleChange={handleChange}
                handleClick={handleClick}
            />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/user-profile">
                        <div style={{marginTop: 70}}>
                            <Info userName={userName} />
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}