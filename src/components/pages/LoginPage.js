import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {
	submit = data =>
		this.props
			.login(data)
			.then(() => this.props.history.push('/dashboard'));

	render() {
		return (
			<div>
				This is Login Page!
				<LoginForm submit={this.submit} />
				<Link to="/forgot-password">Forgot Password?</Link>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(
	null,
	{ login }
)(LoginPage);
