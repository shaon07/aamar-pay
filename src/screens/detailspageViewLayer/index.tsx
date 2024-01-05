import GitHubIssueComponent from "../../components/gitHubIssueTable"

type detailsPageType = {
    data: any
}

export default function DetailPageViewLayer({ data }: detailsPageType) {
    return (
        <div>
            {/* <pre>
                {
                    JSON.stringify(data, null, 2)
                }
            </pre> */}
            <GitHubIssueComponent issueData={data} />
        </div>
    )
}
