import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    // const history = useHistory();
    // const onNavigate = (location) => {
    //     const { pathname: nextPathname } = location;
    //     const { pathname } = history.location;
    //     (pathname !== nextPathname) && history.push(nextPathname);
    // }

    useEffect(() => {
        mount(ref.current);
        // const { onParentNavigate } = mount(ref.current,
        //     { onNavigate, initialPath: history.location.pathname, onSignin: onSignIn });
        // history.listen(onParentNavigate);
    }, []);
    return (
        <div ref={ref}></div>
    )
}