import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notifications from "./components/Notifications";
import Search from "./components/Search/Search";
import notification from "./components/Notification";

const url = "https://restcountries.com/v3.1/all";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notifications, setNotification] = useState([]);
    const [filteredNotifications, setFilteredNotifications] = useState(notifications);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setNotification(data);
            setFilteredNotifications(data);
            setIsLoading(false);
            setError(null);

        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [])

    const handleSearch = (searchValue) => {
        let value = searchValue.toLowerCase();
        const newNotifications = notifications.filter( (notification)  => {
            const notificationName = notification.name.common.toLowerCase();
            const notificationTag = notification.region.toLowerCase();
            return notificationName.includes( value ) || notificationTag.includes( value );
        });

        setFilteredNotifications( newNotifications );
    }


    return (
        <>
            <Navbar className="test navbar navbar-expand-lg navbar-custom bg-primary">
                <Container>
                    <a className="navbar-brand" href="/">Notification</a>
                    <div className="ml-auto">
                        <NavDropdown title="Options" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Container>
            </Navbar>

            <Search onSearch={handleSearch}/>

            <div className="container mt-4">
                {isLoading && <h1>Loading...</h1>}
                {error && <h2>{error.message}</h2>}
                { filteredNotifications && <p>Total : { filteredNotifications.length }</p> }
                { notifications && <Notifications notifications={ filteredNotifications }/> }
            </div>
        </>
    );
};

export default App;