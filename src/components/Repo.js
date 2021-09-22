export default function Repo({repoData, userName}) {
    if (repoData) {
        const pagesLink = `https://${userName}.github.io/${repoData.name}/`;
        return (
            <div className="card me-n3">
                <div className="card-header">
                    <p className="font-weight-bold">
                        {repoData.has_pages ?
                        <a href={pagesLink} target="_blank" rel="noreferrer">{repoData.name}</a>
                        :
                        <a href={repoData.html_url} target="_blank" rel="noreferrer">{repoData.name}</a>
                        }
                    </p>         
                </div>
                <div className="card-body">
                    <p><strong>Description:</strong> {repoData.description}.</p>
                    <p><strong>Language:</strong> {repoData.language}.</p>
                </div>
                <div className="card-footer">
                    <p><strong>Created at</strong> {repoData.created_at}</p>
                    <p><strong>Last updated at</strong> {repoData.updated_at}</p>
                </div>
            </div>
        );
    }
    return null;
}