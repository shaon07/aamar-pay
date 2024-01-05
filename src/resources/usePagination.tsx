import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../services/redux/slices/pagenationSlice";
import { RootState } from "../services/redux/store";


/**
 * Custom hook for pagination.
 * @param arr - The input array to be paginated.
 * @returns An object with the paginated array, total number of pages,
 * current page number, and a function to change the current page.
 */
export default function usePagination(arr: any) {
    const dispatch = useDispatch();
    const { currentPage, pageSize } = useSelector((state: RootState) => state.paginationReducer);
    const totalPages = Math.ceil(arr.length / pageSize);

    /**
     * Returns a paginated array based on the current page and page size.
     * @param arr - The input array to be paginated.
     * @returns The paginated array.
     */
    function paginateArray(arr: any[]) {
        // Calculate the starting index of the current page
        const startIndex = (currentPage - 1) * pageSize;

        // Calculate the ending index of the current page
        const endIndex = startIndex + pageSize;

        // Return the sliced array based on the starting and ending indexes
        return arr.slice(startIndex, endIndex);
    }

    /**
     * Callback function for pagination.
     * Sets the current page in the state.
     * @param {number} page - The page number to set.
     */
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
