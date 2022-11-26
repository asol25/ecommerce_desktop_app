import React from 'react';
import ArticleCart from './_ArticleCart';

interface IProps {
    isCheckedToggle: boolean;
    handleToggle: () => void;
}

function Cart(props: IProps): JSX.Element {
    return (
        <>
            <div
                className={
                    'cart' + ' ' + (props.isCheckedToggle ? 'show-cart' : '')
                }
                id="cart"
            >
                <i
                    className="bx bx-x cart__close"
                    id="cart-close"
                    onClick={props.handleToggle}
                ></i>
                <h2 className="cart__title-center">My Cart</h2>
                <div className="cart__container">
                    <ArticleCart />
                </div>

                <div className="cart__prices">
                    <span className="cart__prices-item">3 items</span>
                    <span className="cart__prices-total">$2880</span>
                </div>
            </div>
        </>
    );
}

export default Cart;
