import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { REPO_LIST_URL } from "../../constants";
import useFetch from "../../services/api";

export default function Details() {
    // get id from params
    const { id } = useParams();
    const { fetchData, data, error, loading } = useFetch();

    useEffect(() => {
        fetchData(`${REPO_LIST_URL}/${id}`)
            .then(data => console.log(data))
            .catch(error => console.log(error))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>{error}</h1>;



    return (
        <div>
            <h1>Details - {id}</h1>
            <pre>
                {
                    JSON.stringify(data, null, 2)
                }
            </pre>
        </div>
    )
}
