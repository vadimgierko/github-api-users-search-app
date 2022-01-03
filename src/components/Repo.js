export default function Repo({ repoData, userName }) {

    if (repoData) {

        const pagesLink = `https://${userName}.github.io/${repoData.name}/`;

        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="font-weight-bold">{repoData.name}</h5>
                    
                    <p className="text-muted card-text">{repoData.created_at.slice(0, 10)} / {repoData.updated_at.slice(0, 10)}</p>  
                </div>
                <div className="card-body">
                    <p className="card-text"><strong>Description:</strong> {repoData.description}</p>
                    <p className="card-text"><strong>Language:</strong> {repoData.language}</p>
                </div>
                <div className="card-footer">
                    {repoData.has_pages
                    ? <a className="btn btn-sm btn-outline-primary me-2" href={pagesLink} target="_blank" rel="noreferrer">Try the app</a>
                    : null
                    }
                    <a className="btn btn-sm btn-outline-secondary" href={repoData.html_url} target="_blank" rel="noreferrer">See the code</a>
                </div>
            </div>
        );
    }
    return null;
}