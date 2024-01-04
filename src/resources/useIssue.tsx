import { useSelector } from 'react-redux';
import { RootState } from '../services/redux/store';
import usePagination from './usePagination';

export default function useIssue() {
    const { issueLists } = useSelector((state: RootState) => state.issueReducer);
    const { paginateArray, totalPages, onPaginate } = usePagination(issueLists);

    const currentPageData = paginateArray(issueLists);

    const onPageChange = (page: number) => {
        onPaginate(page)
    }

    return { currentPageData, totalPages, onPageChange }
}
