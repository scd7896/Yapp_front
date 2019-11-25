import React, { useState } from "react";
import "../../css/Jun/modalInput.scss";

function ModalInput() {
    const [text, setText] = useState("답변을 입력하세요");

    /*e : 이벤트 객체 */
    const onChange = e => {
        setText(e.target.placeholder);
        /*e.target : 이벤트 객체가 일어남 DOM  */
        /*e.target.value : 이벤트 객체가 일어남 DOM의 값들  */
    };
    return (
        <input onChange={onChange} placeholder={text} />
    );
}

export default ModalInput;



