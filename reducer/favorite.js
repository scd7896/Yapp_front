import produce from 'immer'
import {
    GET_FAVORITE_REQUEST, 
    GET_FAVORITE_SUCCESS , 
    GET_FAVORITE_FAILURE , 
    GET_FAVORITE_FLUSH,
    ADD_FAVORITE_SUCCESS,
    ADD_FAVORITE_REQUEST,
    ADD_FAVORITE_FAILURE,
    DELETE_FAVORITE_FAILURE,
    DELETE_FAVORITE_REQUEST,
    DELETE_FAVORITE_SUCCESS
} from '../action'
const initialState ={
    favoriteList : [],
    favortieFail : false
}
const test = (state = initialState , action) =>{
    return produce(state, (draft)=>{
        switch(action.type) {
            case GET_FAVORITE_REQUEST :
                console.log(action);
                draft.favoriteList = [];
                draft.favortieFail = false;
                break;
            case GET_FAVORITE_SUCCESS :
               
                draft.favoriteList = action.favoriteList;
                draft.favortieFail = false;
                console.log(draft.favoriteList);
                break;
            case GET_FAVORITE_FAILURE :
                draft.favoriteList = [];
                draft.favortieFail = true;
                break;
            case GET_FAVORITE_FLUSH :
                draft.favoriteList = [];
                draft.favortieFail = false;
                break;
            case ADD_FAVORITE_SUCCESS :
                if(draft.favoriteList[action.favoriteId] == -1){
                    draft.favoriteList.push(action.favoriteId);
                    draft.favoriteList.sort();
                }
                draft.favortieFail = false;
                break;
            case ADD_FAVORITE_FAILURE :
                draft.favortieFail = true;
                break;
            case DELETE_FAVORITE_SUCCESS :
                if(draft.favoriteList[action.favoriteId] != -1){
                    draft.favoriteList.splice(draft.favoriteList[action.favoriteId],1)
                }
                draft.favortieFail = false;
                break;
            case DELETE_FAVORITE_FAILURE :
                draft.favortieFail = true;
                break;

        }

    })
}

export default test;