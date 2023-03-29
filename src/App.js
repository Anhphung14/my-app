import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import CreateContainer from "./components/CreateContainer";
import HeaderLogin from "./components/Header/HeaderLogin.jsx";
import HeaderFinal from "./components/Headerfinal.jsx/HeaderFinal";
import HomePage from "./components/HomePage/HomePage";
import SearchResult from "./components/Search/searchresult";
import About from "./components/About/about";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/header" element={<Header />} />
        <Route path="/headerLogin" element={<HeaderLogin />} />
        <Route path="/headerFinal" element={<HeaderFinal />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/main" element={<MainContainer />} />
        <Route path="/searchRe" element={<SearchResult />} />
        <Route path="/about" element={<About />} />

        <Route path="/" element={<CreateContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
