import API, { header } from "./api";
const GET_ALL_USERS = "/users";

//get initial list of users
async function usersList() {
    try {
        const res = await API.get(GET_ALL_USERS, header);
        let logList = [];
        res.data.forEach((user) => {
            logList.push(user.login);
        });
        return logList;
    } catch (error) {
        if (error.response) {
            return error.response;  // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request;   // client never received a response, or request never left
        } else {
            return error;           // anything else
        }
    }
}

//get single user for user list and user_card
async function getUser(username) {
    try {
        const response = await API.get(GET_ALL_USERS + "/" + username);
        return response;
    } catch (error) {
        console.error(error);
    }
}
//get all repos for single user
async function getAllRepos(username) {
    try {
        const response = await API.get(GET_ALL_USERS + "/" + username + "/repos");
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;  // client received an error response (5xx, 4xx)
        } else if (error.request) {
            return error.request;   // client never received a response, or request never left
        } else {
            return error;           // anything else
        }
    }
}

export { usersList, getUser, getAllRepos };
