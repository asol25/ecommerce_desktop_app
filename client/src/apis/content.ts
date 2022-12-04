export const content = async () => {
	const contentful = require('contentful');

	const client = contentful.createClient({
		space: 'si61vo6jwmjj',
		environment: 'master', // defaults to 'master' if not set
		accessToken:
			'cWhCNI3hEMT98gdrE4H0uOTgu7p_uw3NidCqSecFQXs',
	});

	const response = await client
		.getEntries()
		.then((response: any) => {
			return response.items;
		})
		.catch(console.error);

	return {
		response,
	};
};
