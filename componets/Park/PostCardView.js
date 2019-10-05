
import React from 'react'

import '../../css/Park/PostCardView.scss'
const PostCardView = (props)=>{

    var title = '모임장소 추천서비스', view = 456, like = 123, star = 4;

    if(props != undefined && props.data != undefined){
        title = props.data.title;
        view = props.data.view;
        like = props.data.like;
        star = props.data.star > 5 ? 5 : props.data.star ;
        star = star < 0 ? 0 : star;
    }


    var Star_on = [], Star_off = [];

    for(let i = 0 ; i < star; i ++){
        Star_on.push(1);
    }
    for(let i = star ; i < 5 ; i ++){
        Star_off.push(0);
    }

    var Star_on_d = Star_on.map((e) =>
        <img class = "post-cardview-star star-on"></img>
    )

    var Star_off_d = Star_off.map((e) =>
        <img class = "post-cardview-star star-off"></img>
    )

    return(
        <div class = "post-cardview">
            <img 
                class = "post-cardview-image" 
                src = "https://www.10wallpaper.com/wallpaper/medium/1909/2019_Planetary_Nebula_Clouds_4K_Universe_medium.jpg"
            ></img>
            <div class = "post-cardview-banner">
                <div class = "post-cardview-info">
                    <div class = "post-cardview-title">
                        {title}
                    </div>
                    <img class = "view_circle"></img>
                    <div class = "post-cardview-view">
                        {view}
                    </div>
                    <img clas = "post-cardview-heart"></img>
                    <div class = "post-cardview-like">{like}</div>
                </div>

                <div class = "post-cardview-scoreboard">
                    <div class = "post-cardview-score-title">
                        프로젝트 만족도
                    </div>
                    <div class = "post-cardview-score-stars">
                        {Star_on_d}
                        {Star_off_d}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostCardView