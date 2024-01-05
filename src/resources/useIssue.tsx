import { useDispatch, useSelector } from 'react-redux';
import { filterByMostComments, filterIssueListByContribute, filterIssueListByDate } from '../services/redux/slices/issueSlice';
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
                onPageChange(1);
                break;

            case 'contribute':
                dispatch(filterIssueListByContribute());
                onPageChange(1);
                break;

            case 'by_date':
                dispatch(filterIssueListByDate());
                onPageChange(1);
                break;

            default:
                break;
        }
    }

    return { currentPageData, totalPages, onPageChange, handleFilterState, currentPage }
}
