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
    favoriteFail : false,
    lastEdited : -1
}
const test = (state = initialState , action) =>{
    return produce(state, (draft)=>{
        switch(action.type) {
            case GET_FAVORITE_REQUEST :
                draft.favoriteList = [];
                draft.favoriteFail = false;
                break;
            case GET_FAVORITE_SUCCESS :
               
                draft.favoriteList = action.favoriteList;
                draft.favoriteFail = false;
                draft.lastEdited = 0;
                break;
            case GET_FAVORITE_FAILURE :
                draft.favoriteList = [];
                draft.favoriteFail = true;
                break;
            case GET_FAVORITE_FLUSH :
                draft.favoriteList = [];
                draft.favoriteFail = false;
                break;
            case ADD_FAVORITE_REQUEST : 
                draft.lastEdited = -1;
                break;
            case ADD_FAVORITE_SUCCESS :
                if(draft.favoriteList.indexOf(action.favoriteId) == -1){
                    draft.favoriteList.push(action.favoriteId);
                    draft.favoriteList.sort();
                }
                draft.favoriteFail = false;
                draft.lastEdited = action.favoriteId;
                break;
            case ADD_FAVORITE_FAILURE :
                draft.favoriteFail = true;
                break;
            case DELETE_FAVORITE_REQUEST : 
                draft.lastEdited = -1;
                break;
            case DELETE_FAVORITE_SUCCESS :
                if(draft.favoriteList.indexOf(action.favoriteId) != -1){
                    draft.favoriteList.splice(draft.favoriteList.indexOf(action.favoriteId),1)
                }
                draft.favoriteFail = false;
                draft.lastEdited = action.favoriteId;
                break;
            case DELETE_FAVORITE_FAILURE :
                draft.favoriteFail = true;
                break;

        }

    })
}

export default test;