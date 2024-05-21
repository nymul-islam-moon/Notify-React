import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faBell } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
    return <>
        <Navbar className="test navbar navbar-expand-lg navbar-custom bg-primary">
            <Container>
                <Link className="navbar-brand" to="/">Notify</Link>
                <Link className="navbar-brand" to="/my-notifications"><FontAwesomeIcon icon={faBell} /> My Notifications</Link>
                <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faStar} /> Important</Link>
                <Link className="navbar-brand" to="/profile"><FontAwesomeIcon icon={faUser} /> Profile</Link>
                <Link className="navbar-brand" to="/profile"> Logout</Link>
            </Container>
        </Navbar>

    </>
}

export default MyNavbar;