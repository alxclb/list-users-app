import React from "react";
import star from '../../icons/star_favourite.png';
import watch from '../../icons/watch.png';
import fork from '../../icons/gitfork.png';
import { Notification } from "./notification";

export const RepoCard = ({ data }) => {
    const { name, description, created_at, licence, watchers_count, stargazers_count, forks_count, clone_url } = data;
    return (
        <li className="repo">
            <a target="_blank" rel="noreferrer" href={clone_url}>
                <h3>{name}</h3>
                <p><span><strong>Description:</strong></span>{description}</p>
                <span><strong>Created at:</strong> {created_at}</span>
                <div>{licence??licence?.name}</div>
                <ul className="notification-list">
                    <Notification notification="Watch" counts={watchers_count} icon={watch}/>
                    <Notification notification="Star" counts={stargazers_count} icon={star}/>
                    <Notification notification="Fork" counts={forks_count} icon={fork}/>
                </ul>
            </a>
        </li>
    );
};

