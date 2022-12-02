import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/pages/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact  element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
