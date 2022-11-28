import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from './_LoginButton';
import LogoutButton from './_LogoutButton';
const Cart = React.lazy(() => import('../components/_Cart'));

function Nav() {
	const [isCheckedMenu, setIsCheckedMenu] = React.useState<boolean>(false);
	const [isCheckedCart, setIsCheckedCart] = React.useState<boolean>(false);
	const [scrollPosition, setScrollPosition] = React.useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const { isAuthenticated } = useAuth0();

	const handleIsCheckedMenu = (): void => {
		setIsCheckedMenu(!isCheckedMenu);
	};

	const handleIsCheckedCart = (): void => {
		setIsCheckedCart(!isCheckedCart);
	};

	return (
		<>
			<nav className={'nav container ' + (scrollPosition <= 50 ? '' : 'none')}>
				<Link to={'/'} className="nav__logo">
					<i className="bx bxs-watch nav__logo-icon"></i> Learning
				</Link>

				<div className={'nav__menu' + ' ' + (isCheckedMenu ? 'show-menu' : '')} id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item">
							<Link to={'/'} className="nav__link active-link">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to={'/featured'} className="nav__link">
								Featured
							</Link>
						</li>
						<li className="nav__item">
							<Link to={'/products'} className="nav__link">
								Products
							</Link>
						</li>
						<li className="nav__item">
							<Link to={'/new'} className="nav__link">
								New
							</Link>
						</li>
					</ul>

					<div className="nav__close" id="nav-close" onClick={handleIsCheckedMenu}>
						<i className="bx bx-x"></i>
					</div>
				</div>

				<div className="nav__btns">
					<i className="bx bx-moon change-theme" id="theme-button"></i>

					<div className="nav__shop" id="cart-shop" onClick={handleIsCheckedCart}>
						<i className="bx bx-shopping-bag"></i>
					</div>

					<div className="nav__toggle" id="nav-toggle" onClick={handleIsCheckedMenu}>
						<i className="bx bx-grid-alt"></i>
					</div>
				</div>
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			</nav>

			<Cart isCheckedToggle={isCheckedCart} handleToggle={handleIsCheckedCart} />
		</>
	);
}

export default Nav;
