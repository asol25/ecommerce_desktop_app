import axios from "axios"

export const find = async () => {
    const response = await axios.get('http://localhost:33714/courses/');
    return response;
}

export const getTotalCourse = async () => {
    const response = await axios.get('http://localhost:33714/courses/totalCourseCount');
    return response;
}