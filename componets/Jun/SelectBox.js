import React, { useState } from "react";
import classNames from "classnames";
import "../../css/Jun/selectbox.scss";

//prpos : placeholder, item배열, type(모양)
//반환값 : val값 (input 선택된 값)
function SelectBox({ type, placeholder, items }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const [val, setVal] = useState("");

  return (
    <div className={classNames("selectbox", type)} onClick={onToggle}>
      {!open && type == "under" && (
        <div className={classNames("select_default", "under")}>
          <span>{!val ? placeholder : val}</span>
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
                transform={val ? "" : "translate(16 10) rotate(180)"}
                fill="#666"
              />
            </svg>
          </span>
        </div>
      )}
      {type == "full" && (
        <div className={classNames("select_default", "full")}>
          <span>{!val ? placeholder : val}</span>
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
                transform={val ? "" : "translate(16 10) rotate(180)"}
                fill="#666"
              />
            </svg>
          </span>
        </div>
      )}

      {open && (
        <>
          <div className="select_cover" onClick={onToggle}></div>
          <div className={classNames("select_open", type)} onClick={onToggle}>
            {items.map(item => (
              <div onClick={() => setVal(item.text)} key={item.id}>
                {item.text}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SelectBox;
