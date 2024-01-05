import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { REPO_LIST_URL } from "../../constants";
import DetailPageViewLayer from "../../screens/detailspageViewLayer";
import useFetch from "../../services/api";

export default function Details() {
    // get id from params
    const { id } = useParams();
    const { fetchData, data, error, loading } = useFetch();

    useEffect(() => {
        fetchData(`${REPO_LIST_URL}/${id}`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>{error}</h1>;

    return <DetailPageViewLayer data={data} />
}
