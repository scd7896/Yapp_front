import React from 'react'

import '../../../css/kim/componentcss/Portfolio.scss'
const Portfolio = ({ data, selected, toggleFun = f => f }) => {
    const onSelectToggle = () => {
        toggleFun(selected, data)
    }
    return (
        <div id={selected ? 'portfolio_container_select' : 'portfolio_container_nonselect'} onClick={onSelectToggle}>
            <div id={selected ? "portfolio_checkbox_select" : "portfolio_checkbox_nonselect"}>
                <img src="https://cdn.zeplin.io/5d8afd2a43adab15d5458ff0/assets/F07BF726-5480-47E3-B117-DC8BC1FD03D8.svg" />
            </div>
            <p id={selected ? "portfolio_text_data_select" : "portfolio_text_data_nonselect"}>
                {data.title}
            </p>
        </div>

    )
}

export default Portfolio;