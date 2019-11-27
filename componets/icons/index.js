import React from 'react'
import { ANDROID, iOS, WEB, UX_UI, DESIGN, DEVELOPER } from './id'

const icons = ({id, isSelected})=>{

    switch(id){
        case ANDROID :
            return (
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="26.33" viewBox="0 0 44 26.33">
                <g id="그룹_2072" data-name="그룹 2072" transform="translate(-1357 -2411.152)">
                  <g id="icon_android">
                    <line id="선_157" data-name="선 157" y1="7.338" x2="7.337" transform="translate(1390.265 2411.859)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="선_158" data-name="선 158" x2="7.337" y2="7.338" transform="translate(1359.438 2411.859)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <path id="패스_1722" data-name="패스 1722" d="M1592.046,541.421a21,21,0,1,1,42,0Z" transform="translate(-234.046 1895.062)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"}  strokeMiterlimit="10" strokeWidth="2"/>
                    <ellipse id="타원_267" data-name="타원 267" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1368.306 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <ellipse id="타원_268" data-name="타원 268" cx="1.486" cy="1.486" rx="1.486" ry="1.486" transform="translate(1387.255 2426.858)" fill={isSelected ? "#5963f5" : "#b9b9b9"} stroke={isSelected ? "#5963f5" : "#b9b9b9"}  strokeMiterlimit="10" strokeWidth="2"/>
                  </g>
                </g>
              </svg>
          )
        case iOS :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="33.52" height="42.443" viewBox="0 0 33.52 42.443">
              <g id="그룹_2073" data-name="그룹 2073" transform="translate(-1115.987 -2403.831)">
                <g id="icon_ios">
                  <g id="icon_ios-2" data-name="icon_ios">
                    <path id="패스_1737" data-name="패스 1737" d="M183.349,655.763a8.749,8.749,0,0,1,4.169-7.342,8.966,8.966,0,0,0-7.06-3.816c-2.97-.313-5.851,1.777-7.364,1.777-1.543,0-3.873-1.746-6.383-1.7a9.4,9.4,0,0,0-7.912,4.824c-3.421,5.922-.87,14.623,2.408,19.409,1.639,2.345,3.555,4.961,6.063,4.869,2.454-.1,3.37-1.562,6.331-1.562,2.934,0,3.794,1.562,6.352,1.5,2.633-.041,4.291-2.355,5.873-4.72a19.35,19.35,0,0,0,2.686-5.469,8.466,8.466,0,0,1-5.164-7.779Z" transform="translate(959.825 1771.483)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"}  strokeMiterlimit="10" strokeWidth="2"/>
                    <path id="패스_1738" data-name="패스 1738" d="M193.885,628.522a8.61,8.61,0,0,0,1.972-6.172,8.776,8.776,0,0,0-5.674,2.934,8.194,8.194,0,0,0-2.023,5.944,7.249,7.249,0,0,0,5.725-2.706Z" transform="translate(944.458 1782.521)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  </g>
                </g>
              </g>
            </svg>
          )
        case WEB :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="49.315" height="39.267" viewBox="0 0 49.315 39.267">
              <g id="그룹_2076" data-name="그룹 2076" transform="translate(-382 -2412)">
                <g id="icon_webservice" transform="translate(-3 10)">
                  <rect id="사각형_2757" data-name="사각형 2757" width="9.348" height="6.874" transform="translate(405.752 2433.393)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="선_168" data-name="선 168" x2="22.805" transform="translate(399.023 2440.267)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <rect id="사각형_2765" data-name="사각형 2765" width="30.393" height="46.612" transform="translate(432.964 2403) rotate(90)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"}  strokeMiterlimit="10" strokeWidth="2"/>
                  <line id="선_179" data-name="선 179" x1="49.315" transform="translate(385 2426.492)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"}  strokeMiterlimit="10" strokeWidth="2"/>
                </g>
              </g>
            </svg>

          )
          
        case UX_UI :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="49.728" height="40.35" viewBox="0 0 49.728 40.35">
              <g id="그룹_2074" data-name="그룹 2074" transform="translate(-873.461 -2404.988)">
                <g id="icon_uiux" transform="translate(874.461 2405.988)">
                  <rect id="사각형_2767" data-name="사각형 2767" width="18.398" height="10.354" transform="translate(29.33 13.998)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <g id="icon_uiux-2" data-name="icon_uiux">
                    <rect id="사각형_2764" data-name="사각형 2764" width="18.398" height="10.354" transform="translate(0 13.998)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="선_169" data-name="선 169" x1="5.149" transform="translate(24.181 5.177)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"}strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="선_170" data-name="선 170" x1="5.149" transform="translate(24.181 33.172)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="선_171" data-name="선 171" x1="10.932" transform="translate(18.398 19.592)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <line id="선_172" data-name="선 172" y2="30.647" transform="translate(24.181 3.849)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <rect id="사각형_2766" data-name="사각형 2766" width="18.398" height="10.354" transform="translate(29.33)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                    <rect id="사각형_2768" data-name="사각형 2768" width="18.398" height="10.354" transform="translate(29.33 27.995)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  </g>
                </g>
              </g>
            </svg>

          )

        case DEVELOPER :
          
        case DESIGN :
        default :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="49.173" height="48.809" viewBox="0 0 49.173 48.809">
              <g id="그룹_2077" data-name="그룹 2077" transform="translate(-615.996 -2393.105)">
                <g id="icon_design" transform="translate(663.754 2421.113) rotate(135)">
                  <line id="선_180" data-name="선 180" y1="13.78" transform="translate(13.966 23.989)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <path id="패스_1739" data-name="패스 1739" d="M25.259,0H1.5L0,16.711,13.381,29.557,26.762,16.711Z" transform="translate(0.584 8.211)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <rect id="사각형_2769" data-name="사각형 2769" width="27.416" height="4.666" transform="translate(0 0)" fill="none" stroke={isSelected ? "#7adfbe" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                  <circle id="타원_269" data-name="타원 269" cx="1.714" cy="1.714" r="1.714" transform="translate(12.252 21.276)" fill="none" stroke={isSelected ? "#5963f5" : "#b9b9b9"} strokeMiterlimit="10" strokeWidth="2"/>
                </g>
              </g>
            </svg>

          )
    }
}
export default icons;