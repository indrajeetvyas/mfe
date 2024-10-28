import React from 'react';
import ReactDOM from 'react-dom'
//import { createRoot } from 'react-dom/client';
import App from './App'

const mount = (el) => {
    console.log(el)
    //const root = createRoot(el)
    ReactDOM.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
        el
    )
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing-development-root');
    if (el) {
        mount(el);
    }
}

export { mount };