/* eslint-disable jsx-a11y/anchor-is-valid */

import { Empty, Image, Pagination } from "antd";
import { Link } from "react-router-dom";
import { tableHeading } from "../../resources/static/table";
import useIssue from "../../resources/useIssue";
import { styles } from "../../styles/tailwind/table/index.css";
import { tableType } from "../../types";
import { checkArray } from "../../utils/checkArray";
import Pill from "../pill";

export default function Table() {
    const { currentPageData, totalPages, onPageChange, currentPage } = useIssue();

    if (currentPageData.length === 0) {
        return (
            <div className="mb-2">
                <Empty />
            </div>
        )
    }

    return (
        <div className={`${styles.tableWrapper}`}>
            <table className={`${styles.table}`}>
                <thead className={`${styles.thead}`}>
                    <tr>
                        {
                            checkArray(tableHeading) && tableHeading.map((heading: tableType, index: number) => {
                                return (
                                    <th key={index} scope="col" className={`${styles.th}`}>
                                        {heading.title}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>

                {
                    checkArray(currentPageData) && currentPageData.map((issue: any, index: number) => (
                        <tbody key={index}>
                            <tr className={`${styles.tr}`}>
                                <th scope="row" className={`${styles.th}`}>
                                    <Image src={issue?.user?.avatar_url} width={50} className="w-[50px] rounded-full" />
                                </th>
                                <th scope="row" className={`${styles.th}`}>
                                    {issue?.user?.login}
                                </th>
                                <td className="px-6 py-4">
                                    <span>{issue?.title}</span>
                                </td>
                                <td className="px-6 py-4">
                                    <Pill type={issue?.state} />
                                </td>
                                <td className="px-6 py-4">
                                    {issue?.comments}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to={`details/${issue?.number}`} className={`${styles.view}`}>View</Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>

            <div className="my-3">
                <Pagination rootClassName="pagination" showQuickJumper={false} defaultCurrent={1} current={currentPage} total={totalPages * 10} onChange={(data) => { onPageChange(data) }} />
            </div>
        </div>

    )
}
