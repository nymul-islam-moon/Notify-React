import React, {useState, useEffect} from "react";
import Notifications from "./components/Notifications";
import Search from "./components/Search/Search";
import MyNavbar from "./components/MyNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import ReadNotification from "./pages/ReadNotification";
import "font-awesome/css/font-awesome.min.css";


const App = () => {

    return (
        <>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/show-notification" element={<ReadNotification />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;