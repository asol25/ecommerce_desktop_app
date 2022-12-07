function Story() {
	return (
		<>
			<section className="story section container">
				<div className="story__container grid">
					<div className="story__data">
						<h2 className="section__title story__section-title">Technology</h2>

						<h1 className="story__title">
							The Progressive JavaScript Framework <br></br> Vue.js
						</h1>

						<p className="story__description">
							Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building
							user interfaces and single-page applications. It was created by Evan You,
						</p>

						<a href="#" className="button button--small">
							Discover
						</a>
					</div>

					<div className="story__images">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
							alt=""
							className="story__img"
						></img>
						<div className="story__square"></div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Story;
