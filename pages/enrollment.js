import React, { useState } from "react";

import "../css/Jun/enrollment.scss";
import "../css/container.scss";

import axios from "axios";

import First from '../componets/Kim/enrollment/template/First'
import LevelContainer from '../componets/Kim/enrollment/blockcontainer/LevelContainer'
import Router from "next/router";
import Second from "../componets/Kim/enrollment/template/Second";
const enrollment = ({lev, create,id}) => {
  
  return (
    <div >
      <div style = {{background : "#ffffff", marginBottom : "100px"}}>
        <div className="container">
          <h1>모집글 작성하기</h1>
          <div className = "enrollment_level_container">
            <LevelContainer lev = {lev}/>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div style = {lev != 1? {display : "none"}:{}}>
          <First projectId = {id}/>
        </div>
        <div style = {lev != 2? {display : "none"}:{}}>
          <Second projectId = {id}/>
        </div>
      </div>  
    </div>
  );
};
enrollment.getInitialProps = async(ctx)=>{
  const create = ctx.query.create;
  if(create === 'create'){
    return{lev : ctx.query.level, id : ctx.query.projectid }
  }else if(create === "change"){

    //프로젝트 게시물 가져와버리기
    ctx.store.dispatch({

    })
    return{lev : ctx.query.level, id : ctx.query.projectid }
  }else{
    Router.push('/error/404')
  }
  
}
export default enrollment;
