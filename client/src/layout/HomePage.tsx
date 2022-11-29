import * as React from 'react';
import Testimonial from '../components/_Testimonial';
import Feature from '../components/_Feature';
import HomeIntroduce from '../components/_HomeIntroduce';
import New from '../components/_New';
import NewsLetter from '../components/_NewsLetter';
import Products from '../components/_Products';
import Story from '../components/_Story';
import HomeIntroduceMock from '../mock/_HomeIntroduceMock';
import { ProductMock } from '../mock/_ProductMock';
import HtmlEditor from '../components/_HtmlEditer';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const { social, title, description, cost, btn, thumbnail } = HomeIntroduceMock();

	const { products } = ProductMock();

	return (
		<>
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
			<Products products={products} />
			{/* <Testimonial /> */}
			{/* <New /> */}
			<NewsLetter />
		</>
	);
};

export default Home;
