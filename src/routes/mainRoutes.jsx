import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../views/notFound';
import LoginView from '../views/login';
import ForgotPasswordView from '../views/forgotPassword';
import ResetPasswordView from '../views/resetPassword';
import ApplicationView from '../views/applicationView';
import { appRoutes } from 'appConstants';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => true === true
                ? <Component {...props} />
                : <Redirect to={appRoutes.baseurl} />}
        />
    );
}


const Routes = (props) => (
    <Switch>                
        <Route path={appRoutes.forgotPassword} component={(props) => <ForgotPasswordView {...props} authSuccessUrl={appRoutes.login} />} />
        <Route path={appRoutes.resetPassword} component={(props) => <ResetPasswordView {...props} authSuccessUrl={appRoutes.login} />} />
        <Route path={appRoutes.login} component={(props) => <LoginView {...props} authSuccessUrl={appRoutes.dashboard} />} />
        <PrivateRoute path={appRoutes.dashboard} component={ApplicationView} />
        <Route path='*' component={NotFound} />
    </Switch>
);

export default Routes;
