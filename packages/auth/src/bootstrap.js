import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";

import {createBrowserHistory, createMemoryHistory} from 'history';


const mount = (el, { onNavigate, defaultHistory, initialPath, onSignin }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if (onNavigate) {
        history.listen(onNavigate);
    }
    console.log(el)
    //const root = createRoot(el)
    ReactDOM.render(
        <React.StrictMode>
            <App history={history} onSignin={onSignin} />
        </React.StrictMode>,
        el
    );

    return {
        onParentNavigate: (location) => {
            console.log('container navigated!', location);
            const {pathname: nextPathname} = location;
            const {pathname} = history.location;
            if(pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_auth_dev_root');
    if (el) {
        mount(el, {defaultHistory: createBrowserHistory()});
    }
}

export { mount };