import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { REPO_LIST_URL } from "../../constants";
import HomepageViewLayer from "../../screens/homepageViewLayer";
import useFetch from "../../services/api";
import { storeIssueList } from "../../services/redux/slices/issueSlice";
import { checkArray } from "../../utils/checkArray";

export default function Homepage() {
    const dispatch = useDispatch();
    const { error, loading, fetchData } = useFetch();

    useEffect(() => {
        fetchData(REPO_LIST_URL).then(data => {
            dispatch(storeIssueList(checkArray(data) ? data : []));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>


    return <HomepageViewLayer />
}
