import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import TopNavigation from './components/navigation/TopNavigation';
import NewBookPage from './components/pages/NewBookPage'

const App = ({ isAuthenticated }) => (
	<div className="ui container">
		{isAuthenticated && <TopNavigation />}
		<Route path="/" exact component={HomePage} />
		<Route path="/confirmation/:token" exact component={ConfirmationPage} />
		<GuestRoute path="/login" exact component={LoginPage} />
		<GuestRoute path="/signup" exact component={SignupPage} />
		<GuestRoute
			path="/forgot-password"
			exact
			component={ForgotPasswordPage}
		/>
		<GuestRoute
			path="/reset-password/:token"
			exact
			component={ResetPasswordPage}
		/>
		<UserRoute path="/dashboard" exact component={DashboardPage} />
		<UserRoute path="/books/new" exact component={NewBookPage} />
	</div>
);

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		isAuthenticated: !!state.user.email
	};
};

export default connect(mapStateToProps)(App);
