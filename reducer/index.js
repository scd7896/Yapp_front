import {combineReducers} from 'redux'

/* 
    모든 컴포넌트 화면에서 필요한 데이터들을 
    상태로 관리를 하는 일종에 상태 저장소 입니다. 
*/
import test from './test'
import button from './button'
import apply from './apply'
import user from './user'
import keywords from './keywords'
import enrollment from './enrollment'
import favorite from "./favorite";
const rootReducer = combineReducers({
    test,
    apply,
    button,
    user,
    keywords,
    enrollment,
    favorite
})

export default rootReducer