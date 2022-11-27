import { useAuth0 } from '@auth0/auth0-react';
import React, { FC } from 'react';
import LoginIcon from '@mui/icons-material/Login';

type ILoginButtonProps = {};

export const LoginButton: FC<ILoginButtonProps> = (props) => {
	const { loginWithRedirect } = useAuth0();
	return (
		<>
			<div onClick={() => loginWithRedirect()}>
				<LoginIcon />
			</div>
		</>
	);
};
