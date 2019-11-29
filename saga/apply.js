import {all, delay,fork, takeEvery,takeLatest, call,put,take} from 'redux-saga/effects'
import {PROJECT_APPLY_REQUEST, PROJECT_APPLY_SUCCESS, PROJECT_APPLY_FAILURE} from '../action/index'
import axios from 'axios'
import url from '../url'
const applyProjectAPI = (data)=>{
    const dataAnswers = [];
    data.answers.map((el)=>{
        dataAnswers.push({content : el})
    })
    const dataPortfolios = []
    data.portfolios.map((el)=>{
        dataPortfolios.push(el.portfolioId)
    })
    return axios.post(`${url}/projects/${data.postId}/applicants`,{
        role : data.role,
        portfolios : dataPortfolios,
        answers : dataAnswers
    },{
        headers :{
            Authorization: 'bearer ' + data.userToken,
        }
    });
}
function* applyProject(action){
    try{
        const result = yield call(applyProjectAPI, action);
        console.log(result.data)
        yield put({
            type: PROJECT_APPLY_SUCCESS
        })
    }catch(err){
        yield put({
            type : PROJECT_APPLY_FAILURE,
            err : err
        })
    }
}

function* watchApplyProject(){
    yield takeLatest(PROJECT_APPLY_REQUEST, applyProject)
}
export default function * applySaga(){
    yield all([
        fork(watchApplyProject)
    ])
}