import React,{useState} from "react";
import "../css/FindSelectbox.scss";
import "../css/container.scss";
import {useSelector} from 'react-redux'
import SelectBox from './Jun/SelectBox'
import locations from '../methods/location'
import url from '../url'
import axios from "axios";
const FindSelectbox = ({onSubmit}) => {
  const {projectKeyword} = useSelector(state=> state.enrollment)
  const [searchString, setSearchString] = useState(null)
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
  }
  const stringSet = (e)=>{
    setSearchString(e.target.value)
    
  }
  const submitSearch = async()=>{
    
    const loactionId = inputs.location.id
    
    
    let baseUrl = url+"/projects/search" +"?" + (searchString? `term=${searchString}&`: "");
    baseUrl += (loactionId!==null? `location=${loactionId}`:"")

    const result = await axios.post(encodeURI(baseUrl) ,{"keywords" : projectKeyword}).catch((err)=> console.log(err))
    
    onSubmit(result.data)
  }
  return (
    <div className="findProject">
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <input style={{paddingBottom: "20px"}} value = {searchString} placeholder="검색어 입력" onChange = {stringSet}></input>
      </div>
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <div id = "recruit_select_box">
          <SelectBox 
            name = "location"
            value = {location.text}
            type = "under"
            placeholder="지역 선택"
            items = {locationsItems}
            inputs = {inputs}
            onClick = {onClick}/>
        </div>
      </div>

      <button onClick = {submitSearch}>검색</button>
    </div>
  );
};

export default FindSelectbox;
