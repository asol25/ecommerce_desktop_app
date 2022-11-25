import React from "react";
import HomeIntroduceMock from "../mock/_HomeIntroduceMock";
const Testimonial = React.lazy(() => import('../components/Testimonial'));
const Feature = React.lazy(() => import('../components/_Feature'));
const Footer = React.lazy(() => import('../components/_Footer'));
const Header = React.lazy(() => import('../components/_Header'));
const HomeIntroduce = React.lazy(() => import('../components/_HomeIntroduce'));
const New = React.lazy(() => import('../components/_New'));
const NewsLetter = React.lazy(() => import('../components/_NewsLetter'));
const Products = React.lazy(() => import('../components/_Products'));
const Story = React.lazy(() => import('../components/_Story'));

function ApplicationPage() {
    const { social, title, description, cost, btn, thumbnail } = HomeIntroduceMock();

    return (
        <>
            <Header />
            <main className="main">
                <HomeIntroduce
                    social={social}
                    title={title}
                    description={description}
                    cost={cost}
                    btn={btn}
                    thumbnail={thumbnail}
                />
                <Feature />
                <Story />
                <Products />
                <Testimonial />
                <New />
                <NewsLetter />
            </main>
            <Footer />
        </>);
}

export default ApplicationPage;