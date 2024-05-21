import React, {useState, useEffect} from "react";
import Notifications from "./components/Notifications";
import Search from "./components/Search/Search";
import MyNavbar from "./components/MyNavbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";
import NoPage from "./pages/NoPage";
import Profile from "./pages/Profile";
import ReadNotification from "./pages/ReadNotification";
import MyNotifications from "./pages/MyNotifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const App = () => {

    return (
        <>
            <BrowserRouter>

                <MyNavbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/my-notifications" element={<MyNotifications />} />
                    <Route path="/show-notification/:id" element={<ReadNotification />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;