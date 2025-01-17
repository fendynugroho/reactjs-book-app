import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';
import { connect } from 'react-redux';
import InlineError from '../messages/InlineError';
import { resetPasswordRequest } from '../../actions/auth';

class ForgotPasswordForm extends Component {
	state = {
		data: {
			email: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e =>
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data).catch(err =>
				this.setState({
					errors: err.response.data.errors,
					loading: false
				})
			);
		}
	};

	validate = data => {
		const errors = {};
		if (!isEmail(data.email)) errors.email = 'Invalid email';
		return errors;
	};

	render() {
		const { errors, loading, data } = this.state;

		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{!!errors.global && <Message negative>{errors.global}</Message>}
				<Form.Field error={!!errors.email}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Please input your registered email"
						value={data.email}
						onChange={this.onChange}
					/>
					{errors.email && <InlineError text={errors.email} />}
				</Form.Field>
				<Button primary>Send Request to Reset Password</Button>
			</Form>
		);
	}
}

ForgotPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default connect(
	null,
	{ resetPasswordRequest }
)(ForgotPasswordForm);
