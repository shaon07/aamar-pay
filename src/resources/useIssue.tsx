import { useDispatch, useSelector } from 'react-redux';
import { filterByMostComments, filterIssueListByContribute, filterIssueListByDate } from '../services/redux/slices/issueSlice';
import { setCurrentPage } from '../services/redux/slices/pagenationSlice';
import { RootState } from '../services/redux/store';
import usePagination from './usePagination';

export default function useIssue() {
    const dispatch = useDispatch();
    const { issueLists } = useSelector((state: RootState) => state.issueReducer);
    const { paginateArray, totalPages, onPaginate, currentPage } = usePagination(issueLists);

    const currentPageData = paginateArray(issueLists);

    const onPageChange = (page: number) => {
        onPaginate(page)
    }

    const handleFilterState = (type: string) => {
        switch (type) {
            case 'comments':
                dispatch(filterByMostComments());
                dispatch(setCurrentPage(1))
                break;

            case 'contribute':
                dispatch(filterIssueListByContribute())
                dispatch(setCurrentPage(1))
                break;

            case 'by_date':
                dispatch(filterIssueListByDate())
                dispatch(setCurrentPage(1))
                break;

            default:
                break;
        }
    }

    return { currentPageData, totalPages, onPageChange, handleFilterState, currentPage }
}
