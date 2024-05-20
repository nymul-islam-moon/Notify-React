import React from "react";

import Notification from "./Notification";

const Notifications = (props) => {

    // console.log(props);
    return (<>
            <div className="row">
                {props.notifications.map((notification) => {
                    const notificationNew = {notification, id: notification.id}
                    return <Notification {...notificationNew} key={notificationNew.id} />;
                })}
            </div>
        </>);
}

export default Notifications;
