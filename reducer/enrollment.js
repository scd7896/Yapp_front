import produce from "immer";
import {
  PROJECT_ENROLLMENT_SUCCESS,
  PROJECT_ENROLLMENT_FAILURE,
  PROJECT_ENROLLMENT_REQUEST
} from "../action";
import Router from "next/router";
import { SET_PROJECT_CONTENTS, SET_PROJECT_TITLE, SET_PROJECT_IMAGE, SET_PROJECT_LONG, MOVE_TO_SECONDPAGE, ADD_PORJECT_POSITION, RMV_PORJECT_POSITION, SET_PROJECT_NOWTEAM, ADD_PROJECT_KEYWORD, RMV_PROJECT_KEYWORD } from "../action/enrollment";

const initialProps = {
  selectList: [],
  resId: null,
  projectTitle : "",
  projectContent : "",
  projectRegion : 0,
  projectLevel : 0,
  projectLong : 0,
  projectPosition : 0,
  projectNowTeam : [0,0,0],
  projectKeyword : [],
  projectImage : {file : null, url : null}
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
      
      case SET_PROJECT_LONG :
        draft.projectLong = action.data
        break;
      case MOVE_TO_SECONDPAGE :
        draft.projectRegion = action.data.region.id;
        draft.projectLevel = action.data.level.id;
        draft.projectLong = action.data.long.id;

        //Router.push('/enrollment/2')
        break

      case ADD_PORJECT_POSITION :
        draft.projectPosition += action.data;
        break;
      case RMV_PORJECT_POSITION :
        draft.projectPosition -= action.data
        break;
      case SET_PROJECT_NOWTEAM :
        draft.projectNowTeam[action.index] = action.data
        break;
      case ADD_PROJECT_KEYWORD :
        draft.projectKeyword.push(action.data)
        break;
      case RMV_PROJECT_KEYWORD :
        draft.projectKeyword = draft.projectKeyword.filter((el)=> el!==action.data)
        break;

      case SET_PROJECT_IMAGE :
        draft.projectImage= {
          file : action.data.file,
          url : action.data.fileUrl
        }
        break;
      default:
        break;
    }
  });
};

export default enrollment;
