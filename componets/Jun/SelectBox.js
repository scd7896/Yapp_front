import React, { useState } from "react";
import classNames from "classnames";
import "../../css/Jun/selectbox.scss";

//prpos : name, placeholder, item배열, type(모양)
//반환값 : val값 (input 선택된 값)
function SelectBox({
  name = "",
  value = "",
  type = "",
  placeholder = "",
  items = [],
  onClick = f => f
}) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const valStyle = {
    color: "black"
  };
  const noneValStyle = {
    color: "#b9b9b9"
  };

  const potato = value => {
    return function(event) {
      onClick({ name: name, value: value });
    };
  };

  return (
    <div className={classNames("selectbox", type)} onClick={onToggle}>
      {!open && type == "under" && (
        <div className={classNames("select_default", "under")}>
          <span style={value ? valStyle : noneValStyle}>
            {!value ? placeholder : value}
          </span>
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
                transform={open ? "" : "translate(16 10) rotate(180)"}
                fill="#666"
              />
            </svg>
          </span>
        </div>
      )}
      {type == "full" && (
        <div className={classNames("select_default", "full")}>
          <span style={value ? valStyle : noneValStyle}>
            {!value ? placeholder : value}
          </span>
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
                transform={open ? "" : "translate(16 10) rotate(180)"}
                fill="#666"
              />
            </svg>
          </span>
        </div>
      )}

      {open && (
        <>
          <div className={classNames("select_open", type)} onClick={onToggle}>
            {items.map(item => (
              <div
                className="potatoBox"
                onClick={potato(item)}
                key={item.id}
              >
                {item.text}
              </div>
            ))}
          </div>
          {/* <div className="select_cover" onClick={onToggle}></div> */}
        </>
      )}
    </div>
  );
}

export default SelectBox;
