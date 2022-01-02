export default function HomePage() {
    return (
        <div style={{marginTop: 70}}>
            <h1>What is  GitHub API Users Searching App?</h1>
            <p>This SPA allows you to find & view any user's basic profile info & public repositories published on GitHub!</p>
            <hr />
            <h3>How to use this App?</h3>
            <p>Input the correct GitHub User username in search field or... add it after slash to app's url (for example: https://vadimgierko.github.io/github-api-users-search-app<strong>/vadimgierko</strong>) & you will see:</p>
            <ul>
                <li>user's current bio & location</li>
                <li>the number of user's public repositories</li>
                <li>user's projects' details: description, language & link to project's github pages if available or source code if not ;-)</li>
            </ul>
            <hr />
            <h3>Technologies used in this project:</h3>
            <ul>
                <li>React 17</li>
                <li>React Router</li>
                <li>Bootstrap 5.1</li>
                <li>GitHub API</li>
                <li>gh-pages deployment</li>
            </ul>
        </div>
    );
}