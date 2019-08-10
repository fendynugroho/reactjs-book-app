import { combineReducers } from 'redux';

import user from './reducers/user';
import user from './reducers/book';

export default combineReducers({
	user,
	book
});
