import React, { useState } from "react";
import "../../css/Jun/selectbox.scss";

function SelectBox() {
  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("선택하세요");
  const onToggle = () => setOpen(!open);
  const onPlaceholder = () => setPlaceholder("서울");

  return (
    <div className="selectbox" onClick={onToggle}>
      {!open && (
        <div className="select_default">
          <span>{placeholder}</span>
          <span id="dropDown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 16 10"
            >
              <path
                id="다각형_18"
                data-name="다각형 18"
                d="M8,0l8,10H0Z"
                transform="translate(16 10) rotate(180)"
                fill="#666"
              />
            </svg>
          </span>
        </div>
      )}
      {open && (
        <>
          <div className="select_cover" onClick={onToggle}></div>
          <div className="select_open" onClick={onToggle}>
            <div onClick={onPlaceholder}>서울</div>
            <div>경기</div>
          </div>
        </>
      )}
    </div>
  );
}
export default SelectBox;
