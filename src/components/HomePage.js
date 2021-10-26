export default function HomePage({ windowSize }) {
    return (
        <div style={{marginTop: `${windowSize > 610 ? "70px" : "110px"}`}}>
            <h1>What is  GitHub API Users Searching App?</h1>
            <p>This app allows you to find & view any user's basic profile info & public repositories published on GitHub!</p>
            <h3>How to use this App?</h3>
            <p>Input the correct GitHub User username in search field (or add it after slash to url) & you will see:</p>
            <ul>
                <li>user's current bio & location</li>
                <li>the number of user's open source projects (public repositories)</li>
                <li>user's projects' detailes: description, language & link to project's github pages if available or source code if not ;-)</li>
            </ul>
            <h3>Technologies used in this project:</h3>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Bootstrap</li>
                <li>GitHub API</li>
                <li>gh-pages deployment</li>
            </ul>
            <h5>Note:</h5>
            <p>
                This is the newest version of the app.
                <a href="https://github.com/vadimgierko/GitHub-Users-Search-App">Previous version</a> was built without using create-react-app.
                Current version is built with create-react-app & gh-pages deployment.
            </p>
        </div>
    );
}