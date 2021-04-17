import React, { useEffect, useState } from 'react';
import { getUser } from '../../utils/service';
import { ListBox } from './listbox';
import { Search } from './search';
import { User } from './user';


export const UserList =({users})=>{

    const [usersData, setUsersData] = useState([]);
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let list = [];
            for(let login of users){
                let data = await getUser(login).then(res=>res?.data);
                list.push(data);
                // if(list.length>4) break
            }
            setUsersData(list);
            setDisplay(list)
        }

        fetchData();
    }, [users])

    //handler
    //name filtering
    function filterUsers(e){
        let val = e.target.value;
        let newArr = display.filter(function (user) { 
            return user.name!== null && user.name.toLowerCase().includes(val.toLowerCase());
        });
        setUsersData(newArr);
    }

    return (
        <div className="user-list">
            <Search onChange={filterUsers}/>
            <ListBox direction="column">
                {usersData.length!==0?usersData.map(data=><User key={data.id} user={data}/>):(<h1 className="loading">...Loading</h1>)}
            </ListBox>
        </div>
    )
}

