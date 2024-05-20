import React, {useEffect, useState} from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setIsLoading(false);
            setError(null);

        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [])

    return {data, isLoading, error};
}

export default useFetch;