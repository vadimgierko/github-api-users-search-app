function Repos({reposData, userName}) {
    console.log(reposData);
    
    const repos = reposData.slice();
    const reposGroups = [];

    for (let i = 0; i < repos.length; i++) {
        if (i === 0 || i%2 === 0) {
            reposGroups.push([]);
            reposGroups[i/2].push(repos[i]);
        } else if (i === 1 || i%2 === 1) {
            reposGroups[Math.floor(i/2)].push(repos[i]);
        }
    }
    
    console.log(reposGroups);
    return (
        <div className="col-md-8">
            {reposGroups.map((repoGroup, i) => {
                console.log(repoGroup[0]);
                console.log(repoGroup[1]);
                return <ReposGroup repo1={repoGroup[0]} repo2={repoGroup[1]} userName={userName} />
            })}  
        </div>
    );
}
