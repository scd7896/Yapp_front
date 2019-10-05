import React from "react";
import "../css/FindSelectbox.scss";
import "../css/container.scss";

const FindSelectbox = () => {
  return (
    <div className="findProject">
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <input placeholder="검색어 입력"></input>
      </div>
      <div className="text_find">
        <img
          style={{ width: "31px", height: "35px" }}
          src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/0A4A76EC-FF35-4D30-A469-340964DF83ED.svg"
        />
        <input placeholder="지역선택"></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="15"
          viewBox="0 0 14 9"
        >
          <path
            id="다각형_13"
            data-name="다각형 13"
            d="M7,0l7,9H0Z"
            transform="translate(14 9) rotate(180)"
            fill="#666"
          />
        </svg>
      </div>

      <button>검색</button>
    </div>
  );
};

export default FindSelectbox;
