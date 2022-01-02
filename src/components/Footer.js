export default function Footer() {
    return (
        <>
            <hr />
            <p className="text-muted text-center">
                <a
                    className="me-2 mb-3"
                    href="https://vadimgierko.github.io/github-api-users-search-app/#/"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration: "none"}}
                >GitHub API Users Search App</a>
                created by
                <a
                    className="ms-2 me-2 mb-3"
                    href="https://vadimgierko.github.io/frontend-developer-portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    style={{textDecoration: "none"}}
                >Vadim Gierko</a>
                | 2021
            </p>
        </>
    );
}