import axios from "axios"

export const find = async () => {
    const response = await axios.get(`http://localhost:33714/analytic`);
    return response;
}

export const getAnalyticFlowNowMonth = async (month) => {
    console.log(month);
    const response = await axios.get(`http://localhost:33714/orders/${month}`);
    return response;
}

export const getAnalyticFlowNowYear = async (year) => {
    const response = await axios.get(`http://localhost:33714/orders/total/prices/year/`);
    return response;
}

