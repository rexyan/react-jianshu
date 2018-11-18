// 提供一个统一对外的方式，使用的时候只需要 import xx from xx/xx/store 就行

import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as constants from './constants'
export { reducer, actionCreators, constants };