import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../services/redux/slices/pagenationSlice";
import { RootState } from "../services/redux/store";

export default function usePagination(arr: any) {
    const dispatch = useDispatch();
    const { currentPage, pageSize } = useSelector((state: RootState) => state.paginationReducer);
    const totalPages = Math.ceil(arr.length / pageSize);

    function paginateArray(arr: any,) {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return arr.slice(startIndex, endIndex);
    }

    const onPaginate = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return {
        paginateArray,
        totalPages,
        onPaginate,
        currentPage
    }
}
