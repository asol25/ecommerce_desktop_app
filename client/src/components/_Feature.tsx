import { CircularProgress } from '@mui/material';
import React from 'react';
import FeatureMock from '../mock/_FeatureMock';
import { ICourses } from '../type';
import ArticleFeature from './_ArticleFeature';

function Feature() {
	const { products } =
		FeatureMock();
	return (
		<>
			<section
				className="featured section container"
				id="featured"
			>
				<h2 className="section__title">
					Featured
				</h2>

				{products.length > 0 ? (
					<div className="featured__container grid">
						{products.map(
							(
								product: ICourses
							) => (
								<ArticleFeature
									key={product.id}
									product={product}
								/>
							)
						)}
					</div>
				) : (
					<CircularProgress />
				)}
			</section>
		</>
	);
}

export default Feature;
