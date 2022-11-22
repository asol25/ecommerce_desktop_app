import axios from "axios"

export const find = async (page) => {
    const response = await axios.get(`https://cryptic-mesa-81897.herokuapp.com/user/${page}`);
    return response;
}

export const getCountUsers = async () => {
    const response = await axios.get(`https://cryptic-mesa-81897.herokuapp.com/user/countUsers`);
    return response;
}

export const intertUser = async (username, password, email, verified, status, page ) => {
    const response = await axios.put(`https://cryptic-mesa-81897.herokuapp.com/user/create`, {
        username,
        password,
        email,
        verified,
        status,
        page
    });
    return response;
}


export const deleteById = async (id, page) => {
    const response = await axios.delete(`https://cryptic-mesa-81897.herokuapp.com/user/delete/${id}/page/${page}`);
    return response;
}