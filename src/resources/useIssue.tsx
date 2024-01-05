import { useDispatch, useSelector } from 'react-redux';
import { filterByMostComments, filterIssueListByContribute, filterIssueListByDate } from '../services/redux/slices/issueSlice';
import { RootState } from '../services/redux/store';
import usePagination from './usePagination';


/**
/**
 * Custom hook to handle pagination and filtering of issue data.
 * @returns {object} - An object containing currentPageData, totalPages, onPageChange, and handleFilterState functions.
 */
export default function useIssue() {
    const dispatch = useDispatch();

    // Get the issueLists from the issueReducer state using useSelector
    const { issueLists } = useSelector((state: RootState) => state.issueReducer);

    // Use the usePagination hook to get pagination related variables and functions
    const { paginateArray, totalPages, onPaginate, currentPage } = usePagination(issueLists);

    // Get the current page's data using the paginateArray function
    const currentPageData = paginateArray(issueLists);

    /**
     * Function to handle page change event.
     * @param {number} page - The new page number.
     */
    const onPageChange = (page: number) => {
        // Call the onPaginate function with the new page number.
        onPaginate(page);
    }

    /**
     * Handle the filter state based on the given type.
     * @param {string} type - The type of filter.
     */
    const handleFilterState = (type: string) => {
        // Switch statement to handle different filter types
        switch (type) {

            // If the type is 'comments', filter by most comments
            case 'comments':
                dispatch(filterByMostComments());
                onPageChange(1);
                break;

            // If the type is 'contribute', filter issue list by contribute
            case 'contribute':
                dispatch(filterIssueListByContribute());
                onPageChange(1);
                break;

            // If the type is 'by_date', filter issue list by date
            case 'by_date':
                dispatch(filterIssueListByDate());
                onPageChange(1);
                break;

            // Default case, do nothing
            default:
                break;
        }
    }

    // Return the necessary variables and functions
    return { currentPageData, totalPages, onPageChange, handleFilterState, currentPage }
}

