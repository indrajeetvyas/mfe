import React, {lazy, Suspense, useState, useEffect} from "react";
// import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
// import AuthApp from "./components/AuthApp";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {createGenerateClassName, StylesProvider} from '@material-ui/core';
import Progress from "./components/Progress";
import {createBrowserHistory} from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        isSignedIn && history.push('/dashboard');
    }, [isSignedIn])
    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth" >
                                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/"/>}
                                {isSignedIn && <DashboardLazy/>}
                            </Route>
                            <Route path="/" component={MarketingLazy}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
        
    )
}