import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Auth0Provider
    domain={"dev-i3evj9rk.us.auth0.com"}
    clientId={"KcGx7uqt2ZapLK6f8rtlnRs87k55ZMrT"}
    redirectUri={`http://localhost:3006/dashboard/app`}
  >
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider >
  </Auth0Provider>,

);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
