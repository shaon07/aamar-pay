/* eslint-disable jsx-a11y/anchor-is-valid */

import { Image } from "antd";
import { Link } from "react-router-dom";
import { styles } from "../../styles/tailwind/table/index.css";

export default function Table() {
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

                <tbody>
                    <tr className={`${styles.tr}`}>
                        <th scope="row" className={`${styles.th}`}>
                            <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width={50} className="w-[50px] rounded-full" />
                        </th>
                        <th scope="row" className={`${styles.th}`}>
                            Silver
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Link to="details/id=1" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                    </tr>
                    <tr className={`${styles.tr}`}>
                        <th scope="row" className={`${styles.th}`}>
                            <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width={50} className="w-[50px] rounded-full" />
                        </th>
                        <th scope="row" className={`${styles.th}`}>
                            Silver
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Link to="details/id=2" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                    </tr>

                    <tr className={`${styles.tr2}`}>
                        <th scope="row" className={`${styles.th}`}>
                            <Image src="https://flowbite.com/docs/images/carousel/carousel-1.svg" width={50} className="w-[50px] rounded-full" />
                        </th>
                        <th scope="row" className={`${styles.th}`}>
                            Silver
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                        <td className="px-6 py-4 text-right">
                            <Link to="details/id=3" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
