import produce from "immer";
import {
  PROJECT_ENROLLMENT_SUCCESS,
  PROJECT_ENROLLMENT_FAILURE,
  PROJECT_ENROLLMENT_REQUEST
} from "../action";
import Router from "next/router";
import { SET_PROJECT_CONTENTS, SET_PROJECT_TITLE, SET_PROJECT_IMAGE, SET_PROJECT_LONG } from "../action/enrollment";

const initialProps = {
  selectList: [],
  resId: null,
  projectTitle : "",
  projectContent : "",
  projectRegion : "",
  projectLevel : "",
  projectLong : "",
  projectPosition : 0,
  projectNowTeam : 0,
  projectKeyword : [],
  projectImage : ""
};

const enrollment = (state = initialProps, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case PROJECT_ENROLLMENT_SUCCESS:
        draft.resId = action.data;
        setStep(2);
        break;
      case SET_PROJECT_CONTENTS :
        draft.projectContent = action.data
        break;
      case SET_PROJECT_TITLE :
        draft.projectTitle = action.data
        break;
      case SET_PROJECT_IMAGE :
        draft.projectImage = action.data
        break;
      case SET_PROJECT_LONG :
        draft.projectLong = action.data
        break;
      
      default:
        break;
    }
  });
};

export default enrollment;
