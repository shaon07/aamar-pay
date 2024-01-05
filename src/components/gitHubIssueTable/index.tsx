import { Image } from "antd";

const GitHubIssueComponent = ({ issueData }: { issueData: any }) => {
    const {
        title,
        number,
        created_at,
        updated_at,
        closed_at,
        user,
        labels,
        state,
        comments,
        body,
        html_url,
        reactions,
        user: { avatar_url },
        // Add other properties here...
    } = issueData;

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded my-8">
            <div className="flex justify-between bg-gray-200 px-4 py-2">
                <h1 className="text-lg font-bold">{title}</h1>
                <span className="text-gray-600">{`#${number}`}</span>
            </div>
            <div className="p-4">
                <div className="text-center mb-4">
                    <Image className="h-1/2 w-full dark:shadow-gray-800 " src={avatar_url} preview={false} alt="image description" />
                </div>

                <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                        <tr className="bg-gray-100 border border-gray-300">
                            <td className="py-2 px-4 font-semibold">State:</td>
                            <td className="py-2 px-4">{state}</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Created At:</td>
                            <td className="py-2 px-4">{new Date(created_at).toLocaleString()}</td>
                        </tr>
                        <tr className="bg-gray-100 border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Updated At:</td>
                            <td className="py-2 px-4">{new Date(updated_at).toLocaleString()}</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Closed At:</td>
                            <td className="py-2 px-4">{closed_at ? new Date(closed_at).toLocaleString() : 'Not closed'}</td>
                        </tr>
                        {/* Display other properties */}
                        <tr className="bg-gray-100 border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Author:</td>
                            <td className="py-2 px-4">{user?.login}</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Labels:</td>
                            <td className="py-2 px-4">{labels?.map((label: any) => label.name).join(', ')}</td>
                        </tr>
                        <tr className="bg-gray-100 border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Comments:</td>
                            <td className="py-2 px-4">{comments}</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Reactions:</td>
                            <td className="py-2 px-4">{reactions?.total_count}</td>
                        </tr>
                        <tr className="bg-gray-100 border border-gray-300">
                            <td className="py-2 px-4 font-semibold">Link:</td>
                            <td className="py-2 px-4">
                                <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                    View on GitHub
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GitHubIssueComponent;
