import React from "react";

import { v4 as uuidv4 } from "uuid";
import Notification from "./Notification";

const Notifications = (props) => {


    return (<>
            <div className="row">
                {props.notifications.map((notification) => {
                    const notificationNew = {notification, id: uuidv4()}
                    return <Notification {...notificationNew} key={notificationNew.id} />;
                })}
            </div>
        </>);
}

export default Notifications;
