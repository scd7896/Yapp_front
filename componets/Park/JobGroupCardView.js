//props.type - big, small
//props.jobgroup - developer, designer, planner
//props.toggle (props.type이 big일 때만 적용이 보장됨) - on, off , default
//props.number - 1,2,3... (optional)

import "../../css/Park/JobGroupCardView.scss";

export default props => {
  var svg_size, svg_color;

  if (props.type == "big") {
    svg_size = "94";
    svg_color = "#eaebff";
  } else {
    svg_size = "112";
    svg_color = "#f5f7fa";
  }

  var designer_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svg_size}
      height={svg_size}
      viewBox="0 0 94 94"
    >
      <g id="그룹_1967" data-name="그룹 1967" transform="translate(-438 -1436)">
        <circle
          id="타원_271"
          data-name="타원 271"
          cx="47"
          cy="47"
          r="47"
          transform="translate(438 1436)"
          fill={props.toggle == "off" ? "#f5f7fa" : svg_color}
        />
        <g
          id="그룹_1894"
          data-name="그룹 1894"
          transform="translate(-592.863 967.411)"
        >
          <line
            id="선_181"
            data-name="선 181"
            x2="12.057"
            y2="12.057"
            transform="translate(1058.354 497.191)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <path
            id="패스_1740"
            data-name="패스 1740"
            d="M1094.608,512.659l-20.785,20.785-15.937-13.306.468-22.948,22.948-.468Z"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#5963f5"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <rect
            id="사각형_2770"
            data-name="사각형 2770"
            width="33.924"
            height="5.774"
            transform="translate(1075.098 538.373) rotate(-45)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <circle
            id="타원_270"
            data-name="타원 270"
            cx="2.121"
            cy="2.121"
            r="2.121"
            transform="translate(1069.164 508)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#5963f5"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
        </g>
      </g>
    </svg>
  );

  var dev_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svg_size}
      height={svg_size}
      viewBox="0 0 102 102"
    >
      <g id="그룹_1968" data-name="그룹 1968" transform="translate(-409 -1814)">
        <circle
          id="타원_283"
          data-name="타원 283"
          cx="51"
          cy="51"
          r="51"
          transform="translate(409 1814)"
          fill={props.toggle == "off" ? "#f5f7fa" : svg_color}
        />
        <path
          id="패스_1742"
          data-name="패스 1742"
          d="M1351.517,511.472l-8.326,8.326,8.61,8.61"
          transform="translate(-901.1 1345.383)"
          fill="none"
          stroke={props.toggle == "off" ? "#b9b9b9" : "#4ce4bd"}
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          id="패스_1743"
          data-name="패스 1743"
          d="M1385.832,528.407l8.326-8.326-8.61-8.61"
          transform="translate(-914.687 1345.383)"
          fill="none"
          stroke={props.toggle == "off" ? "#b9b9b9" : "#4ce4bd"}
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <line
          id="선_187"
          data-name="선 187"
          x1="7.603"
          y2="16.936"
          transform="translate(455.463 1856.854)"
          fill="none"
          stroke={props.toggle == "off" ? "#b9b9b9" : "#4ce4bd"}
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <path
          id="패스_1748"
          data-name="패스 1748"
          d="M26.828,0A26.828,26.828,0,1,1,0,26.828,26.828,26.828,0,0,1,26.828,0Z"
          transform="translate(433.146 1838.427)"
          fill="none"
          stroke={props.toggle == "off" ? "#b9b9b9" : "#5c63ff"}
          stroke-width="3"
        />
      </g>
    </svg>
  );

  var planner_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svg_size}
      height={svg_size}
      viewBox="0 0 102 102"
    >
      <g id="그룹_1969" data-name="그룹 1969" transform="translate(-729 -1814)">
        <circle
          id="타원_285"
          data-name="타원 285"
          cx="51"
          cy="51"
          r="51"
          transform="translate(729 1814)"
          fill={props.toggle == "off" ? "#f5f7fa" : svg_color}
        />
        <g id="그룹_1965" data-name="그룹 1965">
          <path
            id="패스_1730"
            data-name="패스 1730"
            d="M1231.886,532.81h-40.732V496.87h51.72v25.639"
            transform="translate(-438.287 1351.516)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#5963f5"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <line
            id="선_167"
            data-name="선 167"
            x2="55.456"
            transform="translate(751 1857.018)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <line
            id="선_173"
            data-name="선 173"
            y1="12.999"
            transform="translate(763.172 1842)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <line
            id="선_174"
            data-name="선 174"
            y1="12.999"
            transform="translate(797.457 1842)"
            fill="none"
            stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
            stroke-miterlimit="10"
            stroke-width="3"
          />
          <g
            id="그룹_1890"
            data-name="그룹 1890"
            transform="translate(795.07 1873.038)"
          >
            <line
              id="선_175"
              data-name="선 175"
              x2="19.045"
              transform="translate(0 9.522)"
              fill="none"
              stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
              stroke-miterlimit="10"
              stroke-width="3"
            />
            <line
              id="선_176"
              data-name="선 176"
              y2="19.045"
              transform="translate(9.522)"
              fill="none"
              stroke={props.toggle == "off" ? "#b9b9b9" : "#7adfbe"}
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>
        </g>
      </g>
    </svg>
  );

  var cur_svg, cur_jobgruop;

  if (props.jobgroup == "developer" || props.jobgroup == "개발자") {
    cur_svg = dev_svg;
    cur_jobgruop = "개발자";
  } else if (props.jobgroup == "designer"|| props.jobgroup == "디자이너") {
    cur_svg = designer_svg;
    cur_jobgruop = "디자이너";
  } else if (props.jobgroup == "planner" || props.jobgroup == "기획자") {
    cur_svg = planner_svg;
    cur_jobgruop = "기획자";
  }

  if (!Number.isNaN(parseInt(props.number))) {
    cur_jobgruop += ' ' + parseInt(props.number) +'명';
  }

  return (
    <div
      className={"jobgroup-cardview jobgroup-cardview-wrapper-" + props.type}
    >
      <div
        className={
          "jobgroup-cardview-toggle-" +
          (props.toggle ? props.toggle : "default")
        }
      >
        <div className={"jobgroup-cardview-svg-" + props.type}>{cur_svg}</div>
        <div className="jobgroup-cardview-title">{cur_jobgruop}</div>
      </div>
    </div>
  );
};
