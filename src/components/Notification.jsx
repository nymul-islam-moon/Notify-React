import React from "react";
import {Link} from "react-router-dom";
import Tags from  '../components/Tags';
const Notification = (props) => {

    const { name, borders } = props.notification;

    return (
        <div className="col-md-6">
            <div className="post-card card mb-4 position-relative">
                <div className="card-body">
                    <h3 className="card-title text-center"> {name.common}
                    </h3>

                    <div className='position-absolute notification-icon'>
                        <Link to="/show-notification"
                              className="text-decoration-none paper">
                        <i className="fa fa-eye" aria-hidden="true"></i></Link>
                    </div>
                    <p className="card-text paper">This is the description of the first post. It's designed
                        to be visually appealing and user-friendly.</p>
                    <Tags tags={borders}/>
                </div>
            </div>
        </div>
    );
}

export default Notification;