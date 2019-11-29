import produce from "immer";
import {
  SET_APPLYQNA_DATA,
  ADD_PORTFOLIO_MODAL,
  DEL_PORTFOLIO_MODAL,
  OPEN_APPLY_MODAL,
  CLOSE_APPLY_MODAL,
  NEXT_APPLY_MODAL,
  SET_APPLY_JOB,
  PROJECT_APPLY_FAILURE
} from "../action";
const initialState = {
  position: 0,
  answers: [],
  selectPortFolios: [],
  postId: null
};

const apply = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case SET_APPLYQNA_DATA :
        
        draft.answers[action.index] = action.data;
        break;
      case ADD_PORTFOLIO_MODAL:
        draft.selectPortFolios.push(action.data);
        break;
      case DEL_PORTFOLIO_MODAL:
        draft.selectPortFolios = draft.selectPortFolios.filter(
          e => e.title !== action.data.title
        );
        break;
      case CLOSE_APPLY_MODAL:
        draft.postId = null;
        break;
      case OPEN_APPLY_MODAL:
        draft.postId = action.postId;
        break;
      // case NEXT_APPLY_MODAL:
      //   draft.count = action.count;

      case SET_APPLY_JOB :
        draft.position = action.data;
        const tmpArr = []
        for(let i = 0 ; i<action.arrLength; i++){
          tmpArr.push("");
        }
        draft.answers = tmpArr;
        break;
      case PROJECT_APPLY_FAILURE :
        alert("서버에러 새로고침하겠습니다");
        location.reload()
        break;
      default:
        break;
    }
  });
};

export default apply;
