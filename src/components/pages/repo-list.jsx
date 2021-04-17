import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { randomColor } from "../../utils/helper";
import { getAllRepos } from "../../utils/service";
import { Button } from "../common/button";
import { ListBox } from "../common/listbox";
import { RepoCard } from "../common/repo-card";

export const RepoList = () => {
    let { login } = useParams();
    let history = useHistory();
    const [repos, setRepos] = useState([]);
//fetch all repos
    useEffect(() => {
        async function fetchData() {
            let data = await getAllRepos(login).then((res) => res.data);
            setRepos(data);
        }
        fetchData();
    }, [login]);


//handler back
function handlePrevious(){
    history.push("/");
}

    return (
        <div className="repo-list">
            <h2><span style={{color: randomColor()}}>{login}</span> list of repos</h2>
            <div className="btn-wrapper">
                <Button title="Previous" onClick={handlePrevious}/>
            </div>
            <ListBox>
                {repos.map((repo) => (
                    <RepoCard key={repo.id} data={repo} />
                ))}
            </ListBox>
        </div>
    );
};
