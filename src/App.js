import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header.js";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import More from "./Components/More";
import We from "./Components/We";
import Donation from "./Components/Donation"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />{" "}   {/*/is the root directory*/}
        {/*if the user goes to the / route, the item in the elemtns will get rendered*/}
        <Route path="/more" element={<More/>} />
        <Route path="/we" element={<We/>}></Route>
        <Route path="/Donation" element={<Donation/>}></Route>
      </Routes>
    </>
  );
}

export default App;
