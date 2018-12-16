import React, { Component } from 'react';
import '../public/assets/scss/style.scss';
import Routes from './routes';
import LoadingBar from './applicationComponents/loader/loadingBar';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './applicationComponents/errorApi/errorBoundary';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ErrorBoundary>
                    {/* <LoadingBar /> */}
                    <Routes />
                </ErrorBoundary>
            </div>
        );
    }
}
export default withRouter(App);
