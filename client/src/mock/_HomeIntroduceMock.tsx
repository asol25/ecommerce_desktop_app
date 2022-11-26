import { IHomeIntroduce } from "../type";

function HomeIntroduceMock(): IHomeIntroduce {
    const social: string[] = ['Facebook', 'Twitter', 'Instagram'];
    const title = 'NEW COURSES <br> REACTJS 2023';
    const description = 'In this React course, you’ll build powerful interactive applications with one of the most popular JavaScript libraries.';
    const cost = '1200';
    const btn = ['Discover', 'Learning'];
    const thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    return {
        social,
        title,
        description,
        cost,
        btn,
        thumbnail
    }
}

export default HomeIntroduceMock;