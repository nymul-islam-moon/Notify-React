import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyNavbar = () => {
    return <>
        <Navbar className="test navbar navbar-expand-lg navbar-custom bg-primary">
            <Container>
                <Link className="navbar-brand" to="/">Notify</Link>
                <div className="ml-auto">
                    <NavDropdown title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/profile">
                            <Link to="/profile">Profile</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="">Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
        </Navbar>

    </>
}

export default MyNavbar;