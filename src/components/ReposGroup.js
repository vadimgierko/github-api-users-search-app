import Repo from "./Repo";

export default function ReposGroup({repo1, repo2, userName}) {
    //console.log("ReposGroup got data:");
    //console.log(repo1);
    //console.log(repo2);
    return (
        <div className="card-group mb-2" style={{width: "100%"}}>
            <Repo repoData={repo1} userName={userName}/>
            <Repo repoData={repo2} userName={userName}/>
        </div>
    );
}