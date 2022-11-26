import * as React from "react";
import { ICourses } from "../type";

interface IArticleFeatureProps {
    product: ICourses;
}

const ArticleFeature: React.FunctionComponent<IArticleFeatureProps> = (
    props
) => {
    const { title, newPrice, thumbnailUrl } = props.product;
    return (
        <>
            <article className="featured__card">
                <span className="featured__tag">Sale</span>

                <img src={thumbnailUrl} alt="" className="featured__img"></img>

                <div className="featured__data">
                    <h3 className="featured__title">{title}</h3>
                    <span className="featured__price">${newPrice}</span>
                </div>

                <button className="button featured__button">
                    Reading More
                </button>
            </article>
        </>
    );
};

export default ArticleFeature;
