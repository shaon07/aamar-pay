import { useState } from "react";

export default function usePagination(arr: any) {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(arr.length / pageSize);

    function paginateArray(arr: any,) {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return arr.slice(startIndex, endIndex);
    }

    const onPaginate = (page: number) => {
        setCurrentPage(page);
    }

    return {
        paginateArray,
        totalPages,
        onPaginate,
        currentPage
    }
}
