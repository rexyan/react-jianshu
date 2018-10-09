import { combineReducers } from 'redux'
// 因为header/store/index.js下导入了reducer，所以我们只需导入/common/header/store即可
// reducer as herderReaducer 的意思是，导入reducer，从命名为herderReaducer
import { reducer as herderReaducer } from '../common/header/store';

// 在此处将header中的reducer信息导入，并起一个名字叫做header
const reducer = combineReducers({
	header: herderReaducer
})

export default reducer;
