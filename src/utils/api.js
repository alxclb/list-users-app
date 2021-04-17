import axios from "axios";

export default axios.create({
    baseURL: "https://api.github.com",
});

//Set header
export const header = {
    header: {
        'Accept': "application/vnd.github.v3+json",
    }
};
