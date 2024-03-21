import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const render = ({ path }) => {
    return ReactDOMServer.renderToString(
        <StaticRouter location={path}>
            <App />
        </StaticRouter>
    );
};

export { render };
