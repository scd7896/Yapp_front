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
import { POST_PROJECT_REQUEST, POST_PROJECT_FAILURE, POST_PROJECT_SUCCESS } from "../action/enrollment";
const postProjectAPI = (data)=>{
  const {projectQuestion,projectNowTeam, projectImage} = data
  const dataQuestion = projectQuestion.flat()
  const dataNowTeam = projectNowTeam[0] *100 + projectNowTeam[1] * 10 + projectNowTeam[2]
  const dataFile = projectImage.file
  const formData = new FormData()
  console.log(data)
  formData.append("title", data.projectTitle)
  formData.append("content",data.projectContent)
  formData.append("role", data.projectPosition)
  formData.append("step", data.projectLevel)
  formData.append("location", data.projectRegion)
  formData.append("thumbnailImage", dataFile)
  formData.append("expectedPeriod", data.projectLong)
  formData.append("interviewQuestions",dataQuestion)
  console.log(dataQuestion)
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
  // return axios.post(`${url}/projects`, formData, {
  //   headers :{
  //     Authorization: `bearer ${data.userToken}`
  //   }
  // })
  return {data : 1}
}
function * postProject(action){
  try{
    
    const result = yield call(postProjectAPI, action.data)
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
export default function* enrollSaga() {
  yield all([
    fork(watchPostProject)
  ]);
}
