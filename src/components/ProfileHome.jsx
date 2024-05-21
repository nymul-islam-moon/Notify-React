import React from "react";

const ProfileHome = () => {
    return <>
        <div className="tab-pane fade show active" id="show" role="tabpanel" aria-labelledby="show-tab">

            <div className="text-center mt-3">
                <img src="https://via.placeholder.com/150" className="rounded-circle mb-3" alt="Profile Image"/>
                <h3>John Doe</h3>
                <p>Email: john.doe@example.com</p>
            </div>
        </div>
    </>
}

export default ProfileHome;