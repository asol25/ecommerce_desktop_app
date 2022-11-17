import axios from "axios"

export const find = async () => {
    const response = await axios.get(`http://localhost:5000/analytic`);
    return response;
}

export const getAnalyticFlowNowMonth = async (month) => {
    const response = await axios.get(`http://localhost:5000/orders/${month}`);
    return response;
}