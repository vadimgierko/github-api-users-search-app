import { Switch, Route } from 'react-router-dom';
import Info from "./components/Info";
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

export default function App() {
    
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        <HomePage />
                    </Route>
                    <Route path="/:userName">
                        <Info />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
    );
}