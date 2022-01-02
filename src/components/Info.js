import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Bio from "./Bio";
import Repos from "./Repos";

export default function Info() {

    const { userName } = useParams();
    //console.log(userName);

    const [userData, setUserData] = useState();
    const [reposData, setReposData] = useState();

    useEffect(() => {
        if (!userName) return;

        fetch(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setUserData(data);
        });

        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setReposData(data);
        });
    }, [userName]);

    if (userData && reposData) {
        return (
            <div className="row" style={{marginTop: 70}}>
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