export const urls = () => {
    return [
        `${process.env.SERVER_API || 'http://localhost:33714'}/user/countUsers`,
        `${process.env.SERVER_API || 'http://localhost:33714'}/courses/totalCourseCount`,
        `${process.env.SERVER_API || 'http://localhost:33714'}/orders/total/bought`,
        `${process.env.SERVER_API || 'http://localhost:33714'}/area`,
        `${process.env.SERVER_API || 'http://localhost:33714'}/country/`,
        `${process.env.SERVER_API || 'http://localhost:33714'}/orders/total/prices`,
    ]
}