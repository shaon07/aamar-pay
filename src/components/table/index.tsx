/* eslint-disable jsx-a11y/anchor-is-valid */

import { Image, Pagination } from "antd";
import { Link } from "react-router-dom";
import useIssue from "../../resources/useIssue";
import { styles } from "../../styles/tailwind/table/index.css";

export default function Table() {
    const { currentPageData, totalPages, onPageChange } = useIssue();
    return (
        <div className={`${styles.tableWrapper}`}>
            <table className={`${styles.table}`}>
                <thead className={`${styles.thead}`}>
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Avatar
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comments
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>

                {
                    currentPageData.map((issue: any, index: number) => (
                        <tbody key={index}>
                            <tr className={`${styles.tr}`}>
                                <th scope="row" className={`${styles.th}`}>
                                    <Image src={issue?.user?.avatar_url} width={50} className="w-[50px] rounded-full" />
                                </th>
                                <th scope="row" className={`${styles.th}`}>
                                    {issue?.user?.login}
                                </th>
                                <td className="px-6 py-4">
                                    {issue?.title}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className={`h-2.5 w-2.5 rounded-full bg-${issue?.state === "open" ? "green" : "red"}-500 me-2`}></div> {issue?.state}
                                    </div>

                                </td>
                                <td className="px-6 py-4">
                                    {issue?.comments}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to="details/id=1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            <div className="my-3">
                <Pagination showQuickJumper={false} defaultCurrent={1} total={totalPages * 10} onChange={(data) => { onPageChange(data) }} />
            </div>
        </div>

    )
}
