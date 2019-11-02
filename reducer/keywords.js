import produce from 'immer'
import { ADD_KEYWORD_LIST, DEL_KEYWORD_LIST, DEL_KEYWORDS_ALL, SET_KEYWORDS_REQUEST, SET_KEYWORDS_SUCCESS, SET_KEYWORDS_FAILURE } from '../action';
import Router from 'next/router'
const initialProps = {
    selectList : []
}

const keywords = (state = initialProps, action) =>{
    return produce(state, (draft)=>{
        switch(action.type){
            case ADD_KEYWORD_LIST :
                draft.selectList.push(action.data)
                break;

            case DEL_KEYWORD_LIST :
                draft.selectList = draft.selectList.filter((el)=> el !== action.data)
                break;
            case DEL_KEYWORDS_ALL :
                draft.selectList = []
                break;
            case SET_KEYWORDS_SUCCESS :
                Router.push('/mypage/apply')
                break;
            case SET_KEYWORDS_FAILURE :
                alert("데이터가 정상적으로 반영이 안됬습니다")
                break;
                
            default :
                break;
        }
    })
}

export default keywords