import React, { useState } from "react";
import "../css/FindSelectbox.scss";
import "../css/container.scss";
import { useSelector, useDispatch } from "react-redux";
import SelectBox from "./Jun/SelectBox";
import locations from "../methods/location";
import url from "../url";
import axios from "axios";
import { SET_HASMORE_DATA, SET_OFFSET_DATA } from "../action/enrollment";
const FindSelectbox = ({ onSubmit, onChange, searchString, clickSetId }) => {
  const { projectKeyword } = useSelector(state => state.enrollment);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    location: { id: null, text: null }
  });
  const { location } = inputs;
  const locationsItems = locations.map((el, i) => {
    return { id: i, text: el };
  });
  const onClick = e => {
    const { name, value } = e;
    setInputs({
      ...inputs,
      [name]: { id: value.id, text: value.text }
    });
    clickSetId(value.id);
  };
  const stringSet = e => {
    onChange(e.target.value);
  };
  const submitSearch = async () => {
    const loactionId = inputs.location.id;

    let baseUrl =
      url +
      "/projects/search" +
      "?" +
      (searchString ? `term=${searchString}&` : "");
    baseUrl += loactionId !== null ? `location=${loactionId}` : "";

    const result = await axios
      .post(encodeURI(baseUrl), { keywords: projectKeyword })
      .catch(err => console.log(err));
    dispatch({
      type: SET_OFFSET_DATA,
      data: 0
    });
    onSubmit(result.data);
  };
  return (
    <div className="findProject">
      <div className="text_find">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33.449"
          height="37.469"
          viewBox="0 0 33.449 37.469"
        >
          <g
            id="그룹_1746"
            data-name="그룹 1746"
            transform="translate(1.5 1.5)"
          >
            <path
              id="패스_1551"
              data-name="패스 1551"
              d="M0,0,7.438,8.728"
              transform="translate(23.369 26.268)"
              fill="none"
              stroke="#b9b9b9"
              stroke-width="3"
            />
            <circle
              id="타원_1"
              data-name="타원 1"
              cx="14.461"
              cy="14.461"
              r="14.461"
              transform="translate(0 0)"
              fill="none"
              stroke="#e5e5e5"
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>
        </svg>
        <input
          style={{ paddingBottom: "20px" }}
          value={searchString}
          placeholder="검색어 입력"
          onChange={stringSet}
        ></input>
      </div>
      <hr id="findbox_hr_line" />
      <div className="text_find">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25.905"
          height="35.071"
          viewBox="0 0 25.905 35.071"
        >
          <g
            id="구성_요소_39_1"
            data-name="구성 요소 39 – 1"
            transform="translate(0.905 2.101)"
          >
            <line
              id="선_115"
              data-name="선 115"
              y2="10"
              transform="translate(12.011 16.471)"
              fill="none"
              stroke="#b9b9b9"
              stroke-width="3"
            />
            <line
              id="선_116"
              data-name="선 116"
              x1="25"
              transform="translate(0 31.471)"
              fill="none"
              stroke="#b9b9b9"
              stroke-width="3"
            />
            <circle
              id="타원_1"
              data-name="타원 1"
              cx="7.295"
              cy="7.295"
              r="7.295"
              transform="matrix(0.799, 0.602, -0.602, 0.799, 9.977, 0)"
              fill="none"
              stroke="#e5e5e5"
              stroke-miterlimit="10"
              stroke-width="3"
            />
          </g>
        </svg>
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
