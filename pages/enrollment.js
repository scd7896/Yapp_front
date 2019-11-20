import React, { useState } from "react";
import JobGroupCardView from "../componets/Park/JobGroupCardView";
import Question from "../componets/Jun/Question";
import SelectBox from "../componets/Jun/SelectBox";
import Plus from "../componets/Jun/Plus";

import "../css/Jun/enrollment.scss";
import "../css/container.scss";

import Axios from "axios";

import Frist from '../componets/Kim/enrollment/template/First'
const enrollment = ({lev}) => {

  return (
    <div >
      <div style = {{background : "#ffffff", marginBottom : "100px"}}>
        <div className="container">
          <h1>모집글 작성하기</h1>
          <div className = "enrollment_level_container">
            
          </div>
        </div>
        
      </div>
      <div className="container">
        <Frist />
      </div>  
    </div>
  );
};
enrollment.getInitialProps = async(ctx)=>{

  return{lev : ctx.query.level}
}
export default enrollment;
