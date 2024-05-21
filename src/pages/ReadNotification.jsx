import {Link, useLocation, useParams} from "react-router-dom";
import Tags from "../components/Tags";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


const ReadNotification = () => {

    const { id } = useParams();
    const location = useLocation();
    const {state} = location;

    return <>
        <div className="container mt-4" key={state.id}>
            <div className="col-md-12">

                <div className="card mb-4">
                    <div className="card-body">
                        <h3 className="card-title text-center text-primary">{state.title}</h3>
                        <Link to="/" className="position-absolute back_btn"><FontAwesomeIcon icon={faHouse} /></Link>
                        <p className="card-text">{state.desc}</p>
                        <Tags tags={state.tags}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ReadNotification;