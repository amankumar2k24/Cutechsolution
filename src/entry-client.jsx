import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './routes/PrivateRoutes';
// import App from './App';

ReactDOM.hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('app')
);
