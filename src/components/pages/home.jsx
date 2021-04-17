import React, { useEffect, useState } from "react";
import { Error } from "../common/error";
import { UserList } from "../common/user-list";
import { usersList } from "../../utils/service";

export const Home = () => {
    const [users, setUsers] = useState([]);
    // console.log(users);
    useEffect(() => {
        async function fetchData() {
            let data = await usersList();
            setUsers(data);
        }

        fetchData();
        return ()=>console.log('HOME useEffect')
    }, []);

    return (
        <section className="home">
            {users?.data ? (
                <Error
                    status={users?.status}
                    message={users?.data.message}
                />
            ) : (
                <>
                    <UserList users={users} />
                </>
            )}
        </section>
    );
};
