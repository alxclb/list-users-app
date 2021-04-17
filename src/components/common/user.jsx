import React from "react";
import { Link } from "react-router-dom";
import { Desc } from "./desc";


export const User =({user})=>{
const {avatar_url, name, login, bio, company, blog, location, email,hireable, twitter_username, public_repos } = user
    return (
        <li className="user">
            <Link to={`/users/${login}/repos`}>
                <div className="img-wrapper">
                    <img src={avatar_url} alt={login}/>
                </div>
                <div className="desc-wrapper">
                <h3>{name}</h3>
                <Desc title="Biography" text={bio}/>
                <Desc title="Company" text={company}/>
                <Desc title="Blog" text={blog}/>
                <Desc title="Location" text={location}/>
                <Desc title="Email" text={email}/>
                <Desc title="Hireable" text={hireable}/>
                <Desc title="Twitter" text={twitter_username}/>
                <Desc title="Public repos" text={public_repos}/>
            </div>
            </Link>
        </li>
    )
}
