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
import {
  PROJECT_ENROLLMENT_SUCCESS,
  PROJECT_ENROLLMENT_FAILURE,
  PROJECT_ENROLLMENT_REQUEST
} from "../action";

import axios from "axios";
import url from "../url";

function enrollmentAPI(action) {
  return axios.post(
    `${url}/projects`,
    {
      title: "string",
      content: "string",
      role: 0,
      step: 0,
      location: 0,
      thumbnailImage: "string",
      expectedPeriod: 0,
      interviewQuestions: [
        {
          content: "참여할 것입니까?"
        }
      ]
    },
    {
      headers: {
        Authorization: `bearer ${action.token}`
      }
    }
  );
}
function* doingPostProject(action) {
  try {
    const result = yield call(enrollmentAPI, action);
    yield put({
      type: PROJECT_ENROLLMENT_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: PROJECT_ENROLLMENT_FAILURE
    });
  }
}
function* postProject() {
  yield takeEvery(PROJECT_ENROLLMENT_REQUEST, doingPostProject);
}

export default function* enrollSaga() {
  yield all([fork(postProject)]);
}
