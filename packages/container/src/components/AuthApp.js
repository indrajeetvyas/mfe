import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();
    const onNavigate = (location) => {
        const { pathname: nextPathname } = location;
        const { pathname } = history.location;
        (pathname !== nextPathname) && history.push(nextPathname);
    }

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current,
            { onNavigate, initialPath: history.location.pathname, onSignin: onSignIn });
        history.listen(onParentNavigate);
    }, []);
    return (
        <div ref={ref}></div>
    )
}