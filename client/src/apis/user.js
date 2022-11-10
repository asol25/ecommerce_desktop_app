import axios from "axios"

export const find = async (page) => {
    const response = await axios.get(`http://localhost:5000/user/${page}`);
    return response;
}

export const intertUser = async (username, password, email, verified, status, page ) => {
    const response = await axios.put(`http://localhost:5000/user/create`, {
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
    const response = await axios.delete(`http://localhost:5000/user/delete/${id}/page/${page}`);
    return response;
}