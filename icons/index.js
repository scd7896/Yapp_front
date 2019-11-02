import React from 'react'
import { ANDROID, IOS, WEB, UI_UX, DESIGN } from './name'

const icons = (keyword, isSelected)=>{
    switch(keyword){
        case ANDROID :
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="26.33" viewBox="0 0 44 26.33">
                <g id="그룹_2072" data-name="그룹 2072" transform="translate(-1357 -2411.152)">
                  <g id="icon_android">
                    <line id="선_157" data-name="선 157" y1="7.338" x2="7.337" transform="translate(1390.265 2411.859)" fill="none" stroke="#5963f5" stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_158" data-name="선 158" x2="7.337" y2="7.338" transform="translate(1359.438 2411.859)" fill="none" stroke="#5963f5" stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1722" data-name="패스 1722" d="M1592.046,541.421a21,21,0,1,1,42,0Z" transform="translate(-234.046 1895.062)" fill="none" stroke="#7adfbe" stroke-miterlimit="10" stroke-width="2"/>
                    <ellipse id="타원_267" data-name="타원 267" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1368.306 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke="#5963f5" stroke-miterlimit="10" stroke-width="2"/>
                    <ellipse id="타원_268" data-name="타원 268" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1387.255 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke="#5963f5" stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                </g>
              </svg>
          )
        case IOS :
        case WEB :
        case UI_UX :
        case DESIGN :
    }
}
export default icons;