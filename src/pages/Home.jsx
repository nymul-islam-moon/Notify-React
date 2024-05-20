import React, {useEffect, useState} from "react";
import Search from "../components/Search/Search";
import Notifications from "../components/Notifications";


const url = "https://restcountries.com/v3.1/all";
const Home = () => {

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

            if(notificationName.includes( value ) || (notification.borders && notification.borders.some(border => border.toLowerCase().includes(value)))) {
                return notification;
            }
        });

        setFilteredNotifications( newNotifications );
    }
    return <>
        <Search onSearch={handleSearch}/>

        <div className="container mt-4">
            { isLoading && <h1>Loading...</h1> }
            { error && <h2>{error.message}</h2> }
            { filteredNotifications && <p>Total : { filteredNotifications.length }</p> }
            { ! isLoading && filteredNotifications && filteredNotifications.length <= 0 && <h4 className="no-data-found">No data found</h4>}
            { notifications && <Notifications notifications={ filteredNotifications }/> }
        </div>
        </>


}

export default Home;


