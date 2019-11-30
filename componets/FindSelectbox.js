import React, { useState } from "react";
import "../css/FindSelectbox.scss";
import "../css/container.scss";
import {useSelector, useDispatch} from 'react-redux'
import SelectBox from './Jun/SelectBox'
import locations from '../methods/location'
import url from '../url'
import axios from "axios";
import { SET_HASMORE_DATA, SET_OFFSET_DATA } from "../action/enrollment";
const FindSelectbox = ({onSubmit, onChange,searchString, clickSetId}) => {
  const {projectKeyword} = useSelector(state=> state.enrollment)
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
        location : {id : null, text : null}
  })
  const {location} = inputs
  const locationsItems = locations.map((el,i)=>{
    return {id : i, text : el}
  })
  const onClick = e =>{
      const {name, value} = e;
      setInputs({
          ...inputs,
          [name] : {id : value.id, text : value.text}
      })
      clickSetId(value.id)
  }
  const stringSet = (e)=>{
    onChange(e.target.value)
  }
  const submitSearch = async()=>{
    
    const loactionId = inputs.location.id
    
    
    let baseUrl = url+"/projects/search" +"?" + (searchString? `term=${searchString}&`: "");
    baseUrl += (loactionId!==null? `location=${loactionId}`:"")

    const result = await axios.post(encodeURI(baseUrl) ,{"keywords" : projectKeyword}).catch((err)=> console.log(err))
    dispatch({
      type : SET_OFFSET_DATA,
      data : 0
    })
    onSubmit(result.data)
  }
  return (
    <div className="findProject">
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <input
          style={{ paddingBottom: "20px" }}
          value={searchString}
          placeholder="검색어 입력"
          onChange={stringSet}
        ></input>
      </div>
      <hr id="findbox_hr_line" />
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <div id="recruit_select_box">
          <SelectBox
            name="location"
            value={location.text}
            type="under"
            placeholder="지역 선택"
            items={locationsItems}
            inputs={inputs}
            onClick={onClick}
          />
        </div>
      </div>

      <button onClick={submitSearch}>검색</button>
    </div>
  );
};

export default FindSelectbox;
