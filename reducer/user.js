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
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  REPAIR_PASSWORD,
  GET_MYPORTFOLIO_REQUEST,
  GET_MYPORTFOLIO_SUCCESS,
  GET_MYPORTFOLIO_FAILURE
} from "../action";
const initialState = {
  userProfileImage : "",
  userToken: "",
  userId: "",
  userEmail : "",
  userName : "",
  isLogging : false, // 로그인에 성공해서 로그인 중일 때
  nowLogging : false, // 로그인 "진행" 중 일 때
  loginFail : false,
  portFolioList : []
};

const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {

      case GET_MYDATA_SUCCESS:
        console.log(action)
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userEmail = action.userEmail;
        draft.userName = action.userName;
        draft.userProfileImage = action.userProfileImage;
        draft.isLogging = true;
        
        break;
      case GET_MYDATA_FAILURE:
        
        break;
    
        
      case USER_LOGIN_SUCCESS :
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userEmail = action.userEmail;
        draft.userName = action.userName;
        draft.userProfileImage = action.userProfileImage;
        draft.nowLogging = false;
        draft.loginFail = false;
        draft.isLogging = true;
        break;

      case USER_LOGIN_REQUEST : 
        draft.nowLogging = true;
        draft.loginFail = false;
        break;  
      case USER_LOGIN_FAILURE :
        draft.nowLogging = false;
        draft.loginFail = true;
        draft.isLogging = false;
        break;

      case USER_LOGOUT_REQUEST :
        draft.nowLogging = true;
        draft.isLogging = false;
        break;
      case USER_LOGOUT_SUCCESS :
      case USER_LOGOUT_FAILURE :
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userEmail = action.userEmail;
        draft.userName = action.userName;
        draft.userProfileImage = action.userProfileImage;
        draft.nowLogging = false;
        draft.isLogging = false;
        break;

      case USER_JOIN_REQUEST :
        draft.nowLogging = true;
        draft.isLogging = false;
        draft.loginFail = false;
        break;
      case USER_JOIN_SUCCESS :
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userEmail = action.userEmail;
        draft.userName = action.userName;
        draft.userProfileImage = action.userProfileImage;
        draft.nowLogging = false;
        draft.loginFail = false;
        draft.isLogging = true; 
        break;
      case USER_JOIN_FAILURE :
        console.log(action)
        draft.nowLogging = false;
        draft.loginFail = true;
        draft.isLogging = false;
        break;
        
      case REPAIR_PASSWORD :
        draft.loginFail = false;
        break;

      // case GET_MYPORTFOLIO_REQUEST :
          
      //   break;
      // case GET_MYPORTFOLIO_SUCCESS :
          
      //   break;

      // case GET_MYPORTFOLIO_FAILURE : 

      //   break;
      default:
        break;
    }
  });
};

export default user;
