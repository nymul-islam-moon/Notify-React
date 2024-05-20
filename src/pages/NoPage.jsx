import React from "react";


const NoPage = () => {

    return <>
        <div className="errorpage">
            <h1 className="error_page_h">404 Error</h1>
            <p className="error_page_p">Page Not Found</p>
            <a href="/" className="error_page_a">Go Home</a>
        </div>
    </>
}

export default NoPage;
