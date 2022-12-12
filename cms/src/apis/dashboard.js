export const urls = () => {
    return [
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/user/countUsers`,
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/courses/totalCourseCount`,
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/orders/total/bought`,
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/area`,
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/country/`,
        `${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/orders/total/prices`,
    ]
}