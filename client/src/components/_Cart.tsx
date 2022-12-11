import CartMock from '../mock/_Cart';
import { ICourses } from '../type';
import ArticleCart from './_ArticleCart';

interface IProps {
	isCheckedToggle: boolean;
	handleToggle: () => void;
}

function Cart(props: IProps): JSX.Element {
	const { productsCart } = CartMock(props.isCheckedToggle);

	return (
		<>
			{productsCart.length > 0 ? (
				<div className={'cart' + ' ' + (props.isCheckedToggle ? 'show-cart' : '')} id="cart">
					<i className="bx bx-x cart__close" id="cart-close" onClick={props.handleToggle}></i>
					<h2 className="cart__title-center">My Cart</h2>
					<div className="cart__container">
						{productsCart.map((node: ICourses) => (
							<ArticleCart
								id={node.courses.id}
								description={node.courses.description}
								thumbnailUrl={node.courses.thumbnailUrl}
								title={node.courses.title}
								key={node.courses.id}
							/>
						))}
					</div>
				</div>
			) : (
				<div className={'cart' + ' ' + (props.isCheckedToggle ? 'show-cart' : '')} id="cart">
					<i className="bx bx-x cart__close" id="cart-close" onClick={props.handleToggle}></i>
					<h2 className="cart__title-center">Courses Bought</h2>
					<h3>Entity</h3>
				</div>
			)}
		</>
	);
}

export default Cart;
