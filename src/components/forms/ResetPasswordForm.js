import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class ResetPasswordForm extends Component {
	state = {
		data: {
			token: this.props.token,
			password: '',
			passwordConfirmation: ''
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
		if (!data.password) errors.password = "Password can't be blank";
		else if (data.password.length < 6)
			errors.password = 'Password must be at least 6 characters';
		if (!data.passwordConfirmation)
			errors.passwordConfirmation = "Password can't be blank";
		else if (data.password !== data.passwordConfirmation)
			errors.passwordConfirmation = "Password confirmation doesn't match";
		return errors;
	};

	render() {
		const { errors, loading, data } = this.state;

		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{!!errors.global && <Message negative>{errors.global}</Message>}
				<Form.Field error={!!errors.email}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Please input new password"
						value={data.password}
						onChange={this.onChange}
					/>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>

				<Form.Field error={!!errors.email}>
					<label htmlFor="passwordConfirmation">Password</label>
					<input
						type="password"
						id="passwordConfirmation"
						name="passwordConfirmation"
						placeholder="Please confirm your new password"
						value={data.passwordConfirmation}
						onChange={this.onChange}
					/>
					{errors.passwordConfirmation && (
						<InlineError text={errors.passwordConfirmation} />
					)}
				</Form.Field>
				<Button primary>Reset Password</Button>
			</Form>
		);
	}
}

ResetPasswordForm.propTypes = {
	submit: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired
};

export default ResetPasswordForm;
