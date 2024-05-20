import React, {useEffect, useState} from "react";
import Search from "../components/Search/Search";
import Notifications from "../components/Notifications";
import useFetch from "../Hooks/useFetch";


const Home = () => {

    const { data, isLoading, error } = useFetch("http://localhost:3001/notifications");
    const [notifications, setNotification] = useState([]);

    const handleSearch = (searchValue) => {
        let value = searchValue.toLowerCase();
        const newNotifications = notifications.filter( (notification)  => {
            const notificationName = notification.name.common.toLowerCase();

            if(notificationName.includes( value ) || (notification.borders && notification.borders.some(border => border.toLowerCase().includes(value)))) {
                return notification;
            }
        });
        setNotification(newNotifications);
    }
    return <>
            <Search onSearch={handleSearch}/>

            <div className="container mt-4">
                { isLoading && <h1>Loading...</h1> }
                { error && <h2>{error.message}</h2> }
                { data && <Notifications notifications={ data }/> }
            </div>
    </>}

export default Home;


/*
{ filteredNotifications && <p>Total : { filteredNotifications.length }</p> }
{ ! isLoading && filteredNotifications && filteredNotifications.length <= 0 && <h4 className="no-data-found">No data found</h4>}

 */