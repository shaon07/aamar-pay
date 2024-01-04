import axios, { AxiosResponse, Method } from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../../constants';

interface ResponseData {
    // Define the structure of the response data here
}

interface FetchOptions {
    method: Method;
    data?: any;
}

const useFetch = <T extends ResponseData>() => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async (url: string, options?: FetchOptions) => {
        try {
            const response: AxiosResponse<T> = await axios({
                url: `${BASE_URL}/${url}`,
                method: options?.method,
                data: options?.data,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setData(response.data);
            return response.data;
        } catch (error: any) {
            setError(error.message);
            return error?.response?.data;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};

export default useFetch;