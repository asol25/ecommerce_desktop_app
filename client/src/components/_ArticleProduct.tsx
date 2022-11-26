import * as React from "react";
import { ICourses } from "../type";

interface IArticleProductProps {
    product: ICourses;
}
const ArticleProduct: React.FunctionComponent<IArticleProductProps> = (
    props
) => {
    const { title, newPrice, thumbnailUrl } = props.product;
    return (
        <>
            <article className="products__card">
                <img src={thumbnailUrl} alt="" className="products__img"></img>

                <h3 className="products__title">{title}</h3>
                <span className="products__price">${newPrice}</span>

                <button className="products__button">
                    <i className="bx bx-shopping-bag"></i>
                </button>
            </article>
        </>
    );
};

export default ArticleProduct;
