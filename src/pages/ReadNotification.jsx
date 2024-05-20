import {useLocation, useParams} from "react-router-dom";
import Tags from "../components/Tags";
import React from "react";

const ReadNotification = () => {

    const { id } = useParams();
    const location = useLocation();
    const {state} = location;

    return <>
        <div className="container mt-4" key={state.id}>
            <div className="col-md-12">

                <div className="card mb-4">
                    <div className="card-body">
                        <h3 className="card-title text-center">{state.title}</h3>
                        <p className="card-text">{state.desc}</p>
                        <Tags tags={state.tags}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ReadNotification;