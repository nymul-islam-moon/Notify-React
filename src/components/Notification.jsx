import React from "react";
import {Link} from "react-router-dom";
import Tags from  '../components/Tags';
const Notification = (props) => {

    const { id, title, tags, short_desc, desc } = props.notification;

    const redirect_link = `show-notification/${id}`;

    return (
        <div className="col-md-6" key={id}>
            <div className="post-card card mb-4 position-relative">
                <div className="card-body">
                    <h3 className="card-title text-center"> {title}
                    </h3>

                    <div className='position-absolute notification-icon'>
                        <Link to={redirect_link} state={{id, title, desc, tags}}
                              className="text-decoration-none paper">
                        <i className="fa fa-eye" aria-hidden="true"></i></Link>
                    </div>
                    <p className="card-text paper">{ short_desc }</p>
                    <Tags tags={tags}/>
                </div>
            </div>
        </div>
    );
}

export default Notification;