import { combineReducers } from 'redux-immutable'
import { reducer as herderReaducer } from '../common/header/store';
import { reducer as homeReaducer } from '../pages/home/store';
import { reducer as detailReaducer } from '../pages/detail/store';
import { reducer as loginReaducer } from '../pages/login/store';

const reducer = combineReducers({
	header: herderReaducer,
	home: homeReaducer,
	detail: detailReaducer,
	login: loginReaducer
})

export default reducer;
