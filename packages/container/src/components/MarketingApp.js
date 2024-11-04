import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    const onNavigate = (location) => {
        console.log('we observed a change at container level in marketing app', location.pathname);
        const { pathname } = history.location;

        (pathname !== location.pathname) && history.push(location.pathname);
    }
    useEffect(() => {
       const {onParentNavigate} = mount(ref.current, { onNavigate, initialPath: history.location.pathname });
       history.listen(onParentNavigate);
    }, []);

    return (
        <div ref={ref} />
    )
}