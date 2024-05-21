import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileHome from "../components/ProfileHome";
import ProfileUpdate from "../components/ProfileUpdate";


const Profile = () => {
    return <>
        <div className="container mt-4">

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div className="tab-content" id="">
                        <ProfileHome/>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div className="tab-content" id="">
                        <ProfileUpdate/>
                    </div>
                </Tab>

                <Tab eventKey="change_password" title="Change Password">
                    <div className="tab-content" id="">
                        Change Password Component
                    </div>
                </Tab>

                {/*<Tab eventKey="contact" title="Contact" disabled>*/}
                {/*    Tab content for Contact*/}
                {/*</Tab>*/}
            </Tabs>
        </div>
    </>
}

export default Profile;