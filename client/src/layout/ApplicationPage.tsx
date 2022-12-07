import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/_Footer';
import Header from '../components/_Header';

export default function ApplicationPage() {
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
