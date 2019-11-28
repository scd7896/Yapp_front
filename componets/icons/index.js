import React from 'react'
import { ANDROID, iOS, WEB, UX_UI, DESIGN, DEVELOPER, PLANNER, FRONT, BACK, CONTEST, HACKATHON, GAME, AI, IoT, PHYTHON } from './id'

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
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
              <g id="그룹_2320" data-name="그룹 2320" transform="translate(-606 -683)">
                <g id="그룹_2319" data-name="그룹 2319">
                  <g id="icon_dev">
                    <g id="icon_dev-2" data-name="icon_dev" transform="translate(-2.484 -0.057)">
                      <g id="그룹_2282" data-name="그룹 2282" transform="translate(614.765 697.499)">
                        <path id="패스_1732" data-name="패스 1732" d="M1385.744,522.344l5.734-5.345-5.93-5.528" transform="translate(-1365.78 -511.472)" fill="none" stroke={isSelected ? "#7adfbe" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                        <path id="패스_1950" data-name="패스 1950" d="M1391.282,522.344,1385.548,517l5.93-5.527" transform="translate(-1385.548 -511.472)" fill="none" stroke={isSelected ? "#7adfbe" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                        <line id="선_177" data-name="선 177" x1="5.93" y2="10.872" transform="translate(9.319)" fill="none" stroke={isSelected ? "#7adfbe" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                      </g>
                      <circle id="타원_266" data-name="타원 266" cx="18.5" cy="18.5" r="18.5" transform="translate(609.484 684.057)" fill="none" stroke={isSelected ?"#5963f5":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )
        case FRONT : 
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32">
              <g id="그룹_2322" data-name="그룹 2322" transform="translate(-968 -687)">
                <g id="icon_front">
                  <g id="그룹_2313" data-name="그룹 2313">
                    <g id="그룹_2290" data-name="그룹 2290" transform="translate(978.244 701.616)">
                      <g id="그룹_2282" data-name="그룹 2282" transform="translate(0)">
                        <path id="패스_1732" data-name="패스 1732" d="M1385.709,520.413l4.716-4.4-4.877-4.546" transform="translate(-1369.291 -511.472)" fill="none" stroke={isSelected ? "#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                        <path id="패스_1950" data-name="패스 1950" d="M1390.263,520.413l-4.716-4.4,4.877-4.546" transform="translate(-1385.548 -511.472)" fill="none" stroke={isSelected ? "#4ce4bd":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                        <line id="선_177" data-name="선 177" x1="4.877" y2="8.941" transform="translate(7.664)" fill="none" stroke={isSelected ?"#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                      </g>
                    </g>
                    <g id="사각형_3889" data-name="사각형 3889" transform="translate(968 687)" fill="none" stroke={isSelected?"#5c63ff" :"b9b9b9"} stroke-width="2">
                      <rect width="42" height="32" stroke={isSelected?"#5c63ff":"#b9b9b9"}/>
                      <rect x="1" y="1" width="40" height="30" fill="none"/>
                    </g>
                    <line id="선_1018" data-name="선 1018" x2="40.976" transform="translate(968.512 695.707)" fill="none" stroke={isSelected?"#5c63ff":"#b9b9b9"} stroke-width="2"/>
                    <circle id="타원_709" data-name="타원 709" cx="1" cy="1" r="1" transform="translate(972 691)" fill={isSelected?"#4ce4bd" :"#b9b9b9"}/>
                    <circle id="타원_710" data-name="타원 710" cx="1" cy="1" r="1" transform="translate(975 691)" fill={isSelected?"#4ce4bd" :"#b9b9b9"}/>
                    <circle id="타원_711" data-name="타원 711" cx="1" cy="1" r="1" transform="translate(978 691)" fill={isSelected?"#4ce4bd" :"#b9b9b9"}/>
                  </g>
                </g>
              </g>
            </svg>

          )
        case PLANNER :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="41.784" height="33.572" viewBox="0 0 41.784 33.572">
              <g id="그룹_2321" data-name="그룹 2321" transform="translate(-787.926 -684.428)">
                <g id="icon_plan">
                  <g id="그룹_2278" data-name="그룹 2278" transform="translate(17 -13.572)">
                    <path id="패스_1730" data-name="패스 1730" d="M1219.554,523.429h-28.4V496.87h36.06v18.947" transform="translate(-419.228 204.297)" fill="none" stroke={isSelected ?"#5963f5" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_167" data-name="선 167" x2="37.913" transform="translate(771 708.067)" fill="none" stroke={isSelected? "#7adfbe" :"#b9b9b9"}stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_173" data-name="선 173" y1="6.446" transform="translate(779.044 698)" fill="none" stroke={isSelected?"#7adfbe":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_174" data-name="선 174" y1="6.446" transform="translate(801.702 698)" fill="none" stroke={isSelected? "#7adfbe" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <g id="그룹_1890" data-name="그룹 1890" transform="translate(803.267 722.128)">
                      <line id="선_175" data-name="선 175" x2="9.444" transform="translate(0 4.722)" fill="none" stroke={isSelected?"#7adfbe":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                      <line id="선_176" data-name="선 176" y2="9.444" transform="translate(4.722 0)" fill="none" stroke={isSelected?"#7adfbe":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>

          )
        case BACK :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="36" viewBox="0 0 41 36">
              <g id="그룹_2323" data-name="그룹 2323" transform="translate(-1148 -685)">
                <g id="icon_back">
                  <g id="그룹_2314" data-name="그룹 2314">
                    <g id="사각형_3890" data-name="사각형 3890" transform="translate(1148 685)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-width="2">
                      <rect width="41" height="13" stroke="none"/>
                      <rect x="1" y="1" width="39" height="11" fill="none"/>
                    </g>
                    <g id="사각형_3891" data-name="사각형 3891" transform="translate(1148 696)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-width="2">
                      <rect width="41" height="13" stroke="none"/>
                      <rect x="1" y="1" width="39" height="11" fill="none"/>
                    </g>
                    <g id="사각형_3892" data-name="사각형 3892" transform="translate(1148 707)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-width="2">
                      <rect width="41" height="14" stroke="none"/>
                      <rect x="1" y="1" width="39" height="12" fill="none"/>
                    </g>
                    <circle id="타원_712" data-name="타원 712" cx="1.5" cy="1.5" r="1.5" transform="translate(1154 690)" fill={isSelected ? "#5c63ff" :"#b9b9b9"}/>
                    <circle id="타원_713" data-name="타원 713" cx="1.5" cy="1.5" r="1.5" transform="translate(1154 701)" fill={isSelected ? "#5c63ff" :"#b9b9b9"}/>
                    <circle id="타원_714" data-name="타원 714" cx="1.5" cy="1.5" r="1.5" transform="translate(1154 713)" fill={isSelected ? "#5c63ff" :"#b9b9b9"}/>
                    <line id="선_1030" data-name="선 1030" x2="20" transform="translate(1162 691.5)" fill="none" stroke={isSelected ? "4ce4bd" :"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1031" data-name="선 1031" x2="20" transform="translate(1162 702.5)" fill="none" stroke={isSelected ? "4ce4bd" :"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1032" data-name="선 1032" x2="20" transform="translate(1162 714.5)" fill="none" stroke={isSelected ? "4ce4bd" :"#b9b9b9"} stroke-width="2"/>
                  </g>
                </g>
              </g>
            </svg>

          )
        case IoT:
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="38.717" height="37.013" viewBox="0 0 38.717 37.013">
              <g id="icon_iot" transform="translate(-1142.035 -868.987)">
                <g id="그룹_2318" data-name="그룹 2318" transform="translate(777.822 717.962)">
                  <rect id="사각형_3919" data-name="사각형 3919" width="36.717" height="17.02" transform="translate(365.213 170.017)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <line id="선_1042" data-name="선 1042" y2="8.51" transform="translate(392.475 161.335)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <path id="패스_1975" data-name="패스 1975" d="M399.234,159.912a7.879,7.879,0,0,0-11.148,0" transform="translate(-1.22 -0.298)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <path id="패스_1976" data-name="패스 1976" d="M401.509,155.334a11.285,11.285,0,0,0-15.969,0" transform="translate(-1.085 0)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <circle id="타원_730" data-name="타원 730" cx="0.933" cy="0.933" r="0.933" transform="translate(371.181 177.555)" fill={isSelected? "#4ce4bd":"#b9b9b9"}/>
                  <line id="선_1043" data-name="선 1043" x2="6.945" transform="translate(375.217 178.397)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                </g>
              </g>
            </svg>

          )
        case PHYTHON :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="38.039" height="38.039" viewBox="0 0 38.039 38.039">
              <g id="icon_phython" transform="translate(-1327.961 -871.96)">
                <g id="그룹_2306" data-name="그룹 2306" transform="translate(1035.111 721.98)">
                  <path id="패스_1972" data-name="패스 1972" d="M309.916,162.54H295.388a1.538,1.538,0,0,0-1.538,1.538v11.013a1.538,1.538,0,0,0,1.538,1.538h7.91" transform="translate(0 -0.585)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <path id="패스_1973" data-name="패스 1973" d="M319.442,176.425v9.047a1.546,1.546,0,0,1-1.538,1.548H306.891c-.854,0-2.546-.693-2.546-1.548,0,0-.267-16.825.233-16.825h14.865V152.518a1.544,1.544,0,0,0-1.538-1.538H306.891a1.546,1.546,0,0,0-1.548,1.538v9.264" transform="translate(-0.527)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <path id="패스_1974" data-name="패스 1974" d="M314.013,176.629h15.349a1.54,1.54,0,0,0,1.548-1.538V164.078a1.54,1.54,0,0,0-1.548-1.538h-9.441" transform="translate(-1.02 -0.585)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <circle id="타원_728" data-name="타원 728" cx="0.956" cy="0.956" r="0.956" transform="translate(307.854 155.234)" fill= {isSelected ? "#4ce4bd":"#b9b9b9"}/>
                  <circle id="타원_729" data-name="타원 729" cx="0.956" cy="0.956" r="0.956" transform="translate(314.388 180.559)" fill= {isSelected ? "#4ce4bd":"#b9b9b9"}/>
                </g>
              </g>
            </svg>

          )
        case AI :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
              <g id="icon_ai" transform="translate(-963 -870)">
                <g id="그룹_2317" data-name="그룹 2317" transform="translate(-3.92 -0.278)">
                  <g id="사각형_3917" data-name="사각형 3917" transform="translate(974 877)" fill="none" stroke={isSelected? "#5c63ff":"#b9b9b9"} stroke-width="2">
                    <rect width="27.271" height="28.271" stroke="none"/>
                    <rect x="1" y="1" width="25.271" height="26.271" fill="none"/>
                  </g>
                  <g id="그룹_2307" data-name="그룹 2307" transform="translate(980.027 870.278)">
                    <line id="선_1038" data-name="선 1038" y1="4.729" transform="translate(13.837)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1039" data-name="선 1039" y1="4.729" transform="translate(6.918)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1041" data-name="선 1041" y1="4.729" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                  </g>
                  <g id="그룹_2309" data-name="그룹 2309" transform="translate(980.027 907.548)">
                    <line id="선_1038-2" data-name="선 1038" y1="4.729" transform="translate(13.837)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1039-2" data-name="선 1039" y1="4.729" transform="translate(6.918)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1041-2" data-name="선 1041" y1="4.729" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                  </g>
                  <g id="그룹_2308" data-name="그룹 2308" transform="translate(1008.92 883.855) rotate(90)">
                    <line id="선_1038-3" data-name="선 1038" y1="4.729" transform="translate(13.837)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1039-3" data-name="선 1039" y1="4.729" transform="translate(6.918)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1041-3" data-name="선 1041" y1="4.729" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                  </g>
                  <g id="그룹_2310" data-name="그룹 2310" transform="translate(971.649 883.855) rotate(90)">
                    <line id="선_1038-4" data-name="선 1038" y1="4.729" transform="translate(13.837)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1039-4" data-name="선 1039" y1="4.729" transform="translate(6.918)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                    <line id="선_1041-4" data-name="선 1041" y1="4.729" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2"/>
                  </g>
                  <g id="사각형_3918" data-name="사각형 3918" transform="translate(978.644 882.134)" fill="none" stroke={isSelected? "#4ce4bd":"#b9b9b9"} stroke-width="2">
                    <rect width="18" height="18" stroke="none"/>
                    <rect x="1" y="1" width="16" height="16" fill="none"/>
                  </g>
                </g>
              </g>
            </svg>

          )
        case GAME :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="31" viewBox="0 0 43 31">
              <g id="icon_game" transform="translate(-784.806 -872)">
                <g id="그룹_2316" data-name="그룹 2316" transform="translate(-1)">
                  <path id="패스_1969" data-name="패스 1969" d="M190.662,172.243a9.719,9.719,0,0,1-9.639,9.8,9.608,9.608,0,0,1-8.315-4.841h-5.093a9.608,9.608,0,0,1-8.315,4.841,9.8,9.8,0,0,1-.071-19.591h21.91A9.718,9.718,0,0,1,190.662,172.243Z" transform="translate(637.144 719.957)" fill="none" stroke={isSelected ? "#5c63ff" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <line id="선_1035" data-name="선 1035" y2="10.048" transform="translate(808.04 872)" fill="none" stroke={isSelected ? "#5c63ff" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <line id="선_1036" data-name="선 1036" x2="6.548" transform="translate(792.846 892)" fill="none" stroke={isSelected? "#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <line id="선_1037" data-name="선 1037" y2="6.548" transform="translate(795.967 888.719)" fill="none" stroke={isSelected? "#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <circle id="타원_724" data-name="타원 724" cx="1.107" cy="1.107" r="1.107" transform="translate(814.87 890.588)" fill="none" stroke={isSelected? "#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  <circle id="타원_725" data-name="타원 725" cx="1.107" cy="1.107" r="1.107" transform="translate(819.932 890.588)" fill="none" stroke={isSelected? "#4ce4bd" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                </g>
              </g>
            </svg>

          )
        case HACKATHON :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="38.061" height="38.835" viewBox="0 0 38.061 38.835">
              <g id="그룹_2325" data-name="그룹 2325" transform="translate(-609 -873)">
                <g id="icon_hackerthon">
                  <g id="그룹_2315" data-name="그룹 2315">
                    <path id="패스_1964" data-name="패스 1964" d="M112.285,153.58v13.763a14.524,14.524,0,0,1-.412,3.38,13.777,13.777,0,0,1-26.7.015,14.645,14.645,0,0,1-.412-3.395V153.58Z" transform="translate(529.674 720.42)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_1033" data-name="선 1033" y2="9.035" transform="translate(628.429 901.479)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1965" data-name="패스 1965" d="M84.52,158.817" transform="translate(529.634 721.282)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1966" data-name="패스 1966" d="M85.008,157.973H80.953v7.572a6.674,6.674,0,0,0,4.273,6.347,4.384,4.384,0,0,0,1.042.246" transform="translate(529.047 721.143)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1967" data-name="패스 1967" d="M108.612,157.973h4.055v7.572a6.676,6.676,0,0,1-4.273,6.347,4.384,4.384,0,0,1-1.042.246" transform="translate(533.393 721.143)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <line id="선_1034" data-name="선 1034" x2="18.635" transform="translate(619.112 910.835)" fill="none" stroke={isSelected ? "#5c63ff" :"#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1968" data-name="패스 1968" d="M97.422,159.229l1.593,3.227,3.562.518L100,165.486l.608,3.547-3.186-1.675-3.186,1.675.608-3.547-2.577-2.512,3.562-.518Z" transform="translate(530.91 721.35)" fill="none" stroke={isSelected?"#4ce4bd":"#b9b9b9"} stroke-linejoin="bevel" stroke-width="2"/>
                  </g>
                </g>
              </g>
            </svg>

          )
        case CONTEST :
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="40.485" viewBox="0 0 31 40.485">
              <g id="그룹_2324" data-name="그룹 2324" transform="translate(-1327.079 -682.77)">
                <g id="icon_contest">
                  <g id="그룹_2305" data-name="그룹 2305" transform="translate(1100.31 532.966)">
                    <path id="패스_1970" data-name="패스 1970" d="M241.915,159.153l1.732,3.509,3.873.563-2.8,2.732.662,3.857-3.464-1.821-3.464,1.821.662-3.857-2.8-2.732,3.873-.563Z" transform="translate(0.496 0.266)" fill="none" stroke={isSelected ? "#5c63ff" : "#b9b9b9"} stroke-linejoin="bevel" stroke-width="2"/>
                    <ellipse id="타원_726" data-name="타원 726" cx="14.5" cy="14.108" rx="14.5" ry="14.108" transform="translate(227.768 150.803)" fill="none" stroke={isSelected ? "#5c63ff" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <ellipse id="타원_727" data-name="타원 727" cx="10.537" cy="10.616" rx="10.537" ry="10.616" transform="translate(231.731 154.766)" fill="none" stroke={isSelected ?"#4ce4bd" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                    <path id="패스_1971" data-name="패스 1971" d="M252.1,174.259v13.9l-9.978-4.051-10.1,4.051v-13.9" transform="translate(0.287 0.64)" fill="none" stroke={isSelected ? "#5c63ff" : "#b9b9b9"} stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                </g>
              </g>
            </svg>
          )
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