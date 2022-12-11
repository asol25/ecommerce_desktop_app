import * as React from 'react';
import { Link, redirect } from 'react-router-dom';
import { ICourses } from '../type';

interface IArticleProductProps {
	product: ICourses;
}
const ArticleProduct: React.FunctionComponent<
	IArticleProductProps
> = (props) => {
	const { id, title, newPrice, thumbnailUrl } =
		props.product;

	return (
		<>
			<Link to={`/courses?course=${id}`}>
				<article className="products__card">
					<img
						src={thumbnailUrl}
						alt=""
						className="products__img"
					></img>

					<h3 className="products__title">{title}</h3>
					<span className="products__price">
						${newPrice}
					</span>

					<button className="products__button">
						<i className="bx bx-shopping-bag"></i>
					</button>
				</article>
			</Link>
		</>
	);
};

export default ArticleProduct;
