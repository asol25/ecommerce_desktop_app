import * as React from 'react';
import { Link } from 'react-router-dom';
import { ICourses } from '../type';

interface IArticleFeatureProps {
	product: ICourses;
}

const ArticleFeature: React.FunctionComponent<IArticleFeatureProps> = (props) => {
	const { id, title, newPrice, thumbnailUrl } = props.product;
	return (
		<>
			<article className="featured__card">
				<span className="featured__tag">Sale</span>

				<img src={thumbnailUrl} alt="" className="featured__img"></img>

				<div className="featured__data">
					<h3 className="featured__title">{title}</h3>
					<span className="featured__price">${newPrice}</span>
				</div>

				<Link to={'/courses?course=' + id} className="button featured__button">
					Reading More
				</Link>
			</article>
		</>
	);
};

export default ArticleFeature;
