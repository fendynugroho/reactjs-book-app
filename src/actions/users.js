import api from '../api';
import { userLoggedIn } from './auth';

export const signup = data => dispacth =>
	api.user.signup(data).then(user => {
		localStorage.bookJWT = user.token;
		dispacth(userLoggedIn(user));
	});
