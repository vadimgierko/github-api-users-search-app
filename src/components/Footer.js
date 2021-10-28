export default function Footer() {
    return (
        <>
            <hr />
            <p className="text-muted text-center">
                <a
                    className="nav-link text-center mb-3"
                    href="https://vadimgierko.github.io/github-api-users-search-app/#/"
                    target="_blank"
                    rel="noreferrer"
                    style={{display: "inline"}}
                >GitHub API Users Search App</a>
                created by
                <a
                    className="nav-link text-center mb-3"
                    href="https://vadimgierko.github.io/frontend-developer-portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    style={{display: "inline"}}
                >Vadim Gierko</a>
                | 2021
            </p>
        </>
    );
}