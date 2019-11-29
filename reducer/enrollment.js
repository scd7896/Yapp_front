import produce from "immer";
import {
  PROJECT_ENROLLMENT_SUCCESS,
  PROJECT_ENROLLMENT_FAILURE,
  PROJECT_ENROLLMENT_REQUEST
} from "../action";
import Router from "next/router";
import { SET_PROJECT_CONTENTS, SET_PROJECT_TITLE, SET_PROJECT_IMAGE, SET_PROJECT_LONG, MOVE_TO_SECONDPAGE, ADD_PORJECT_POSITION, RMV_PORJECT_POSITION, SET_PROJECT_NOWTEAM, ADD_PROJECT_KEYWORD, RMV_PROJECT_KEYWORD, ADD_QUESTION_LIST, SET_QUESTION_TEXT, RMV_QUESTION_LIST, POST_PROJECT_REQUEST, POST_PROJECT_SUCCESS, POST_PROJECT_FAILURE, GET_PROJECT_SUCCESS, GET_PROJECT_REQUEST, GET_PROJECT_FAILURE, PATCH_PROJECT_SUCCESS, SET_PROJECT_KEYWORD, SET_OFFSET_DATA, SET_HASMORE_DATA } from "../action/enrollment";

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
  projectImage : {file : null, url : null},
  projectQuestion : [[{id: 0, text :""}],[{id : 1, text: ""}],[{id : 2, text : ""}],[{id: 4 , text : ""}]],
  offset : 1,
  hasMore : true
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
      case SET_PROJECT_KEYWORD :
        draft.projectKeyword = [action.data];
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

      case ADD_QUESTION_LIST :
        draft.projectQuestion[action.data].push({
          id: action.idValue,
          text : ""
        })
        break;
      case RMV_QUESTION_LIST :
          draft.projectQuestion[action.index] = draft.projectQuestion[action.index].filter((el,i)=> i!== action.jindex)
          break;
      case SET_QUESTION_TEXT :
        draft.projectQuestion[action.index][action.jindex].text = action.data
        break;

      case POST_PROJECT_REQUEST:
          draft.resId = null;
          break;
      case POST_PROJECT_SUCCESS :
          draft.resId = action.data.projectId;
          Router.push({
            pathname : '/enrollment',
            query: { create: 'create', level : '3', projectid : action.data.projectId },
            
          })
          break;
      case POST_PROJECT_FAILURE :
        break;  

      case GET_PROJECT_SUCCESS :
        
        draft.resId = action.data.projectId;
        draft.projectTitle = action.data.title;
        draft.projectContent = action.data.content;
        draft.projectImage.url = action.data.thumbnailImage;
        draft.projectPosition = action.data.role;
        draft.projectLong = action.data.expectedPeriod;
        const current = parseInt(action.data.currentMember)
        draft.projectNowTeam[0] = parseInt(current/100)
        draft.projectNowTeam[2] = current %10;
        draft.projectNowTeam[1] = parseInt((current % 100) /10)
        
        action.questions.interviewQuestions.map((el)=>{
          const index = el.role === 4 ? 3 : el.role
          draft.projectQuestion[index].push({
            id : el.role,
            text : el.content
          })
        })
        break;
      case GET_PROJECT_REQUEST :
        break;
      
      case GET_PROJECT_FAILURE :
        break;
      case PATCH_PROJECT_SUCCESS:
        draft.resId = action.data
        Router.push(`/enrollment/change/3/${action.data}`)
        break;
      case SET_OFFSET_DATA :
        draft.offset = action.data+1;
        break;
      case SET_HASMORE_DATA :
        draft.hasMore = action.data;
        break;
      default:
        break;
    }
  });
};

export default enrollment;
