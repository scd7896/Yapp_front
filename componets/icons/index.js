import React from 'react'
import { ANDROID, IOS, WEB, UI_UX, DESIGN } from './name'

const icons = ({keyword, isSelected})=>{
    
    switch(keyword){
        case ANDROID :
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="26.33" viewBox="0 0 44 26.33">
                <g id="그룹_2072" data-name="그룹 2072" transform="translate(-1357 -2411.152)">
                  <g id="icon_android">
                    <line id="선_157" data-name="선 157" y1="7.338" x2="7.337" transform="translate(1390.265 2411.859)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_158" data-name="선 158" x2="7.337" y2="7.338" transform="translate(1359.438 2411.859)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1722" data-name="패스 1722" d="M1592.046,541.421a21,21,0,1,1,42,0Z" transform="translate(-234.046 1895.062)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"}  stroke-miterlimit="10" stroke-width="2"/>
                    <ellipse id="타원_267" data-name="타원 267" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1368.306 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke={isSelected ? "#5963f5" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <ellipse id="타원_268" data-name="타원 268" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1387.255 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke={isSelected ? "#5963f5" : "#b9b9b9"}  stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                </g>
              </svg>
          )
        case IOS :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="33.52" height="42.443" viewBox="0 0 33.52 42.443">
              <g id="그룹_2073" data-name="그룹 2073" transform="translate(-1115.987 -2403.831)">
                <g id="icon_ios">
                  <g id="icon_ios-2" data-name="icon_ios">
                    <path id="패스_1737" data-name="패스 1737" d="M183.349,655.763a8.749,8.749,0,0,1,4.169-7.342,8.966,8.966,0,0,0-7.06-3.816c-2.97-.313-5.851,1.777-7.364,1.777-1.543,0-3.873-1.746-6.383-1.7a9.4,9.4,0,0,0-7.912,4.824c-3.421,5.922-.87,14.623,2.408,19.409,1.639,2.345,3.555,4.961,6.063,4.869,2.454-.1,3.37-1.562,6.331-1.562,2.934,0,3.794,1.562,6.352,1.5,2.633-.041,4.291-2.355,5.873-4.72a19.35,19.35,0,0,0,2.686-5.469,8.466,8.466,0,0,1-5.164-7.779Z" transform="translate(959.825 1771.483)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"}  stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1738" data-name="패스 1738" d="M193.885,628.522a8.61,8.61,0,0,0,1.972-6.172,8.776,8.776,0,0,0-5.674,2.934,8.194,8.194,0,0,0-2.023,5.944,7.249,7.249,0,0,0,5.725-2.706Z" transform="translate(944.458 1782.521)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                </g>
              </g>
            </svg>
          )
        case WEB :
        case UI_UX :
        case DESIGN :
        default :
            return <>hello world</>;
    }
}
export default icons;