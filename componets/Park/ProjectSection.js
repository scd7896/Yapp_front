import ProjectCardView from '../../componets/Park/ProjectCardView';

import '../../css/container.scss'

import '../../css/kim/index.scss'

export default class ProjectSection extends React.Component {

    constructor(){
        super();
        this.state = {
            data : [1,2,3,4,5,6]
        }

        this.handleMoreButton = this.handleMoreButton.bind(this);
    }

    handleMoreButton(){
        var oldData = JSON.parse(JSON.stringify(this.state.data)) ;
        var newData = oldData.concat([1,2,3]);
        this.setState({data:newData});
    }

    render(){
        return (
            <div id = "project-section">
                <div id = "post_card_container">
                    {this.state.data.map((e,i)=>{
                        return <ProjectCardView />
                    })}
                </div>
                <div id = "post_more_button_container">
                    <button id = "post_more_button" onClick={this.handleMoreButton}>더보기</button>
                </div>
            </div>
        )
    }
}