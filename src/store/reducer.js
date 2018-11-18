import { combineReducers } from 'redux-immutable'
import { reducer as herderReaducer } from '../common/header/store';
import { reducer as homeReaducer } from '../pages/home/store';
import { reducer as detailReaducer } from '../pages/detail/store';

const reducer = combineReducers({
	header: herderReaducer,
	home: homeReaducer,
	detail: detailReaducer
})

export default reducer;
