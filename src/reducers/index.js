import { combineReducers } from 'redux';
import chat from './chat-reducer';
import { reducer as form } from 'redux-form';

export default combineReducers({form, chat});


