
interface IProps {
	social: string[];
	title: string;
	description: string;
	cost: string;
	btn: string[];
	thumbnail: string;
}

function HomeIntroduce(props: IProps) {
	const { social, title, description, cost, btn, thumbnail } = props;
	return (
		<>
			<section className="home" id="home">
				<div className="home__container container grid">
					<div className="home__img-bg">
						<img src={thumbnail} alt="" className="home__img"></img>
					</div>

					<div className="home__social">
						{social.map((node) => {
							return (
								<a
									key={node}
									href={`https://www.${node.toLowerCase()}.com/`}
									target="_blank"
									className="home__social-link"
								>
									{node}
								</a>
							);
						})}
					</div>
					
					<div className="home__data">
						<h1 className="home__title" dangerouslySetInnerHTML={{ __html: title }}></h1>
						<p className="home__description">{description}</p>
						<span className="home__price">${cost}</span>

						<div className="home__btns">
							<a href="#" className="button button--gray button--small">
								{btn[0]}
							</a>

							<button
								className="button home__button"
							>
								{btn[1]}
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomeIntroduce;
