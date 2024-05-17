import React from "react";
import Badge from 'react-bootstrap/Badge';

const Notification = (props) => {
    const { name, region } = props.notification;

    return (
        <div className="col-md-6">
            <div className="post-card card mb-4">
                <div className="card-body">
                    <h3 className="card-title text-center"><a href="" className="text-decoration-none paper"> {name.common} </a></h3>
                    <p className="card-text paper">This is the description of the first post. It's designed
                        to be visually appealing and user-friendly.</p>
                    <a href=""><Badge bg="secondary">{region}</Badge></a>
                </div>
            </div>
        </div>
    );
}

export default Notification;