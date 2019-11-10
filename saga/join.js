import baseURL from '../url'
import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import {USER_JOIN_REQUEST, USER_JOIN_SUCCESS, USER_JOIN_FAILURE} from '../action'
function userJoinAPI(userData){

    return axios.post(baseURL + '/join', 
            {
                name : userData.name,
                email : userData.email, 
                password : userData.password,
                password : userData.password2
            }
        ).catch(err=>{
            throw '로그인실패'
        })
    //로그인의 에러처리
}

function* userJoin(action){
    try{
        
        const userData = {
            name : action.name,
            email : action.email,
            password : action.password,
            password2 : action.password2
        }
        
        const result = yield call(userJoinAPI, userData)
        
        document.cookie = `user-token=${result.data.token}`
        
        yield put({
            type : USER_JOIN_SUCCESS,
            userToken : result.data.token,
        })
        
    }catch(e){
        
        //에러 코드에 따라서 비밀번호 틀리게할껀지 
        //이메일의문제일지 결정
        yield put({
            type : USER_JOIN_FAILURE,
            error : e
        })
    }
}

function * watchUserJoin(){
    yield takeLatest(USER_JOIN_REQUEST, userJoin)
}

export default function* joinSaga(){
    yield all([
        fork(watchUserJoin)
    ])
}