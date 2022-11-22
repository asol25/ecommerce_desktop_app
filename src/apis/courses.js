import axios from "axios"

export const find = async () => {
    const response = await axios.get('https://cryptic-mesa-81897.herokuapp.com/courses/');
    return response;
}

export const getTotalCourse = async () => {
    const response = await axios.get('https://cryptic-mesa-81897.herokuapp.com/courses/totalCourseCount');
    return response;
}