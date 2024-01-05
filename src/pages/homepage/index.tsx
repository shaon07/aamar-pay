import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Loader } from "../../components/loader";
import { REPO_LIST_URL } from "../../constants";
import useIssue from "../../resources/useIssue";
import HomepageViewLayer from "../../screens/homepageViewLayer";
import useFetch from "../../services/api";
import { storeIssueList } from "../../services/redux/slices/issueSlice";
import { checkArray } from "../../utils/checkArray";

export default function Homepage() {
    const dispatch = useDispatch();
    const { error, loading, fetchData } = useFetch();
    const { currentPageData } = useIssue();

    useEffect(() => {
        fetchData(REPO_LIST_URL).then(data => {
            dispatch(storeIssueList(checkArray(data) ? data : []));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading && currentPageData.length === 0) return <Loader />
    if (error) return <h1>{error}</h1>


    return <HomepageViewLayer />
}
