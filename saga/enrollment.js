import {
  all,
  delay,
  fork,
  takeEvery,
  takeLatest,
  call,
  put,
  take
} from "redux-saga/effects";


import axios from "axios";
import url from "../url";
import { POST_PROJECT_REQUEST, POST_PROJECT_FAILURE, POST_PROJECT_SUCCESS, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS, GET_PROJECT_FAILURE } from "../action/enrollment";
const postProjectAPI = (data)=>{
  const {projectQuestion,projectNowTeam, projectImage} = data
  const dataQuestion = projectQuestion.flat()
  const dataNowTeam = projectNowTeam[0] *100 + projectNowTeam[1] * 10 + projectNowTeam[2]
  const dataFile = projectImage.file
  const formData = new FormData()
  const filterQuestion = [];
  dataQuestion.map((el)=>{
    if(el.text !== ""){
      const data = JSON.stringify({"content" : el.text, "role": el.id})
      filterQuestion.push(data)
    }

  })
  
  formData.append("title", data.projectTitle)
  formData.append("content",data.projectContent)
  formData.append("role", data.projectPosition)
  formData.append("step", data.projectLevel)
  formData.append("location", data.projectRegion)
  formData.append("thumbnailImage", dataFile)
  formData.append("expectedPeriod", data.projectLong)
  formData.append("interviewQuestions",filterQuestion)
  
  /*
    {
  "title": "string",
  "content": "string",
  "role": 0,
  "step": 0,
  "location": 0,
  "thumbnailImage": "string",
  "expectedPeriod": 0,
  "interviewQuestions": [
    {
      "content": "참여할 것입니까?"
    }
  ]
}
  */
  return axios.post(`${url}/projects`, formData, {
    headers :{
      Authorization: `bearer ${data.userToken}`
    }
  })
  return {data : 1}
}
function * postProject(action){
  try{
    
    const result = yield call(postProjectAPI, action.data)
    console.log(result.data)
    yield put({
      type : POST_PROJECT_SUCCESS,
      data : result.data
    })
  }catch(e){
    yield put({
      type : POST_PROJECT_FAILURE,
      error : e
    })
  }
}
function * watchPostProject(){
  yield takeEvery(POST_PROJECT_REQUEST, postProject)
}
const getProjectAPI = (id)=>{
  return axios.get(`${url}/projects/${id}`)
}
function * getProject (action){
  try{
    const result = yield call(getProjectAPI, action.data);
    yield put({
      type : GET_PROJECT_SUCCESS,
      data : result.data
    })
  }catch(err){
    yield put({
      type : GET_PROJECT_FAILURE,
      err : err
    })
  }
}
function * watchGetProject(){
  yield takeEvery(GET_PROJECT_REQUEST, getProject)
}
export default function* enrollSaga() {
  yield all([
    fork(watchPostProject),
    fork(watchGetProject)
  ]);
}
