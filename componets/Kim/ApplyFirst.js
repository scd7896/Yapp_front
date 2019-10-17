import React,{useState} from 'react'


import '../../css/kim/componentcss/ApplyFirst.scss'
const ApplyFirst = ()=>{
    
    const [applyJob, setApplyJob] = useState(['디자이너', '개발자', '기획자'])
    return (
        <div id = "first_modal_contents_container">
            <div id = "first_modal_head_container">
                <div>
                    <img width = "100%"  src = "https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/7CDB8BF0-8F5E-4284-B01A-B4AC1CBF83BA.svg"/>
                </div>
                <div id = "first_modal_head_text_container">
                    <div id = "first_modal_head_icon_container">
                        <p id = "first_modal_head_icon">1</p>
                    </div>
                    <p id = "first_modal_header_title">지원자님께 질문!</p>
                    <p id = "first_modal_header_subtitle">( * 필수답변 질문입니다.)</p>

                </div>
            </div>
            <div id = "first_modal_body_container">
                <span id = "modal_position_selector_title"> <span>지원</span><span>직군</span> </span>
                <span id = "modal_most_select_icon">*</span>
                <div>
                    <select id = "first_modal_body_select">
                        {applyJob.map((e,i)=>{
                            return(
                                <option id = "first_modal_body_option" key = {i}>{e}</option>
                            )
                        })}
                    </select>
                </div>
                
            </div>
        </div>
    )
}

export default ApplyFirst;