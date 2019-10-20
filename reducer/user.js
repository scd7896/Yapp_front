import produce from "immer";
import {
  GET_MYDATA_FAILURE,
  GET_MYDATA_REQUEST,
  GET_MYDATA_SUCCESS
} from "../action";
const initialState = {
  userToken: "",
  userNickName: "",
  userId: ""
};

const user = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_MYDATA_REQUEST:
        draft.userToken = "";
        draft.userNickName = "";
        draft.userId = "";
        break;
      case GET_MYDATA_SUCCESS:
        draft.userToken = action.userToken;
        draft.userId = action.userId;
        draft.userNickName = action.userNickName;
        break;
      case GET_MYDATA_FAILURE:
        draft.userToken = "";
        draft.userId = "";
        draft.userNickName = "";
        break;
      default:
        break;
    }
  });
};

export default user;
