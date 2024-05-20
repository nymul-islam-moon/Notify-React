import React, {useEffect, useState} from "react";

const DataFetch = () => {

    const [ notifications, setNotifications ] = useState(null);

    useEffect(() => {
        fetch("")
    })

    return <>
        <h1>data fetch</h1>
    </>
}

export default DataFetch;