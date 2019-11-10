import React, { Component } from 'react';
import FormInput from '../form_input/FormInput';
import CustomButton from '../custom_button/CustomButton';
import './sign_in.scss';
import { signInWithGoogle } from '../../firebase/util';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = () => {

	}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="sign-in-container">
				<h2 className="title">I have already have an account</h2>
				<span>Sign with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email"
						value={this.state.email}
						label="Email"
						required
						type="email"
						onChange={this.handleChange}
					/>
					<FormInput 
						name="password"
						value={this.state.password}
						label="Password"
						required
						type="password"
						onChange={this.handleChange}
					/>
					<div className="button-container">
						<CustomButton type="submit" >
							Sign In
						</CustomButton>
						<CustomButton type="button" onClick={() => signInWithGoogle()} isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}
