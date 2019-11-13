import produce from "immer";
import {
  GET_MYDATA_FAILURE,
  GET_MYDATA_REQUEST,
  GET_MYDATA_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_JOIN_REQUEST,
  USER_JOIN_SUCCESS,
  USER_JOIN_FAILURE,
  REPAIR_PASSWORD,
  GET_MYPORTFOLIO_REQUEST,
  GET_MYPORTFOLIO_SUCCESS,
  GET_MYPORTFOLIO_FAILURE
} from "../action";
const initialState = {
  userToken: "",
  userNickName: "",
  userId: "",
  isLogging : false,
  nowLogging : false,
  loginFail : false,
  portFolioList : []
};

const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_MYDATA_REQUEST:
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        draft.isLogging = true;
        break;
      case GET_MYDATA_SUCCESS:
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userNickName = action.userNickName;
        draft.isLogging = false;
        break;
      case GET_MYDATA_FAILURE:
        draft.userToken = "";
        draft.userId = "";
        draft.userNickName = "";
        draft.isLogging = false;
        break;
      
      case USER_LOGIN_REQUEST :
        draft.nowLogging = true;
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        break;
        
      case USER_LOGIN_SUCCESS :
        draft.userToken = action.userToken;
        draft.nowLogging = false;
        draft.loginFail = false;
        break;

      case USER_LOGIN_REQUEST : //실제로 적용안되고있음 확인후 삭제할것
        draft.nowLogging = false;
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        draft.loginFail = false;
        break;  
      case USER_LOGIN_FAILURE :
        draft.nowLogging = false;
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        draft.loginFail = true;
        break;

      case USER_JOIN_REQUEST :
        draft.nowLogging = true;
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        break;
      case USER_JOIN_SUCCESS :
        draft.userToken = action.userToken;
        draft.nowLogging = false;
        draft.loginFail = false;
        break;
      case USER_JOIN_FAILURE :
        draft.nowLogging = false;
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        draft.loginFail = true;
        break;
        
      case REPAIR_PASSWORD :
        draft.loginFail = false;
        break;

      case GET_MYPORTFOLIO_REQUEST :
        draft.portFolioList  = []
        break;
      case GET_MYPORTFOLIO_SUCCESS :
          
        break;

      case GET_MYPORTFOLIO_FAILURE : 

        break;
      default:
        break;
    }
  });
};

export default user;
