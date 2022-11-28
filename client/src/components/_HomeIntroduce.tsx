import { DialogProps } from '@mui/material';
import React from 'react';
import ReviewPaymentMock from '../mock/_ReviewPaymen';
import Policies from './_Policies';

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
	const { handleChange } = ReviewPaymentMock();
	const [open, setOpen] = React.useState(false);
	const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

	const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
		setOpen(true);
		setScroll(scrollType);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const descriptionElementRef = React.useRef<HTMLElement>(null);
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

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
					<Policies
						open={open}
						scroll={scroll}
						handleClickOpen={handleClickOpen}
						handleClose={handleClose}
						descriptionElementRef={descriptionElementRef}
					/>
					<div className="home__data">
						<h1 className="home__title" dangerouslySetInnerHTML={{ __html: title }}></h1>
						<p className="home__description">{description}</p>
						<span className="home__price">${cost}</span>

						<div className="home__btns">
							<a href="#" className="button button--gray button--small" onClick={handleClickOpen('paper')}>
								{btn[0]}
							</a>

							<button
								className="button home__button"
								onClick={() => handleChange({ title, cost, description })}
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
