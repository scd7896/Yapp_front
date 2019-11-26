import ProjectCardView from "../../componets/Park/ProjectCardView";

import "../../css/container.scss";

import "../../css/kim/index.scss";
import Router from 'next/router'

export default class ProjectSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      data: this.props.projects.slice(0,6)
    };

    this.handleMoreButton = this.handleMoreButton.bind(this);
    this.checkMore = this.checkMore.bind(this);
  }

  checkMore(){
    return ! (this.state.data.length >= 12 || this.props.projects.length <= this.state.data.length);
  }

  handleMoreButton() {
    if(this.checkMore()){
      var oldData = JSON.parse(JSON.stringify(this.state.data));
      var newData = oldData.concat(this.props.projects.slice(6,12));
      this.setState({ data: newData });
    }
    else{
     Router.push('/recruit')
    }

  }

  render() {

    return (
      <div id="project-section">
        <div id="post_card_container">
          {this.state.data.map(project => {
            return <ProjectCardView project = {project}/>;
          })}
        </div>

          
          <div id="post_more_button_container">
            <button id="post_more_button" onClick={this.handleMoreButton}>
              {
                this.checkMore() ?
                '더보기' : '더 알아보기'
              }
            </button>
          </div>
      </div>
    );
  }
}
