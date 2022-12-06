import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/pages/Home";
import Navbar from "./component/Navbar";
import {Footer} from "./component/Footer";
import Bio from "./component/pages/Bio";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/bio" exact element={<Bio />}/>
                    {/*<Route path="/count" exact  element={<Count />}/>*/}
                    {/*<Route path="/cost" exact  element={<Cost />}/>*/}
                    {/*<Route path="/contact" exact  element={<Contact />}/>*/}
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
