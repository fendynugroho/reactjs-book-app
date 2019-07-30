import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {
	submit = data => console.log(data);

	render() {
		return (
			<div>
				This is Login Page!
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

export default LoginPage;
