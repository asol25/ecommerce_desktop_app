import * as React from "react";

interface IArticleCartProps {}

const ArticleCart: React.FunctionComponent<IArticleCartProps> = (props) => {
    return (
        <>
            <article className="cart__card">
                <div className="cart__box">
                    <img
                        src="assets/img/featured1.png"
                        alt=""
                        className="cart__img"
                    ></img>
                </div>

                <div className="cart__details">
                    <h3 className="cart__title">Jazzmaster</h3>
                    <span className="cart__price">$1050</span>

                    <div className="cart__amount">
                        <div className="cart__amount-content">
                            <span className="cart__amount-box">
                                <i className="bx bx-minus"></i>
                            </span>

                            <span className="cart__amount-number">1</span>

                            <span className="cart__amount-box">
                                <i className="bx bx-plus"></i>
                            </span>
                        </div>

                        <i className="bx bx-trash-alt cart__amount-trash"></i>
                    </div>
                </div>
            </article>
        </>
    );
};

export default ArticleCart;
