import { useState, useEffect } from 'react';
import api from '../services/api';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Note: This is an example. The API might not exist yet.
                // const response = await api.get(url);
                // setData(response.data);

                // Simulating delay for demonstration
                await new Promise(resolve => setTimeout(resolve, 500));
                setData(null); // No real data yet
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
