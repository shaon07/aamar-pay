import GitHubIssueComponent from "../../components/gitHubIssueTable"

type detailsPageType = {
    data: any
}

export default function DetailPageViewLayer({ data }: detailsPageType) {
    return (
        <div className="pb-2 mx-2">
            <GitHubIssueComponent issueData={data} />
        </div>
    )
}
