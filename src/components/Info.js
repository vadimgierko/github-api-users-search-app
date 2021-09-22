function Info({userName}) {
    const [userData, setUserData] = React.useState();
    const [reposData, setReposData] = React.useState();

    React.useEffect(() => {
        if (!userName) return;
        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserData(data);
        });

        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setReposData(data);
        });
    }, [userName]);

    if (userData && reposData) {
        return (
            <div className="row">
                <Bio
                    userName={userData.login}
                    avatarSrc={userData.avatar_url}
                    location={userData.location}
                    reposNum={userData.public_repos}
                    bio={userData.bio}
                />
                <Repos reposData={reposData} userName={userName} />
            </div>
        );
    }
    return null;
}