import { useAuth0 } from "@auth0/auth0-react";
// @mui
import { LoadingButton } from '@mui/lab';
// components

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={() => loginWithRedirect()} >
        Log In
      </LoadingButton>
    </>
  );
}
