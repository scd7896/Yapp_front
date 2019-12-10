import React from "react";
import "../../css/MyPage/MyPortfolioSection.scss";
import cookies from "../../methods/cookies";
import Router from "next/router";
import baseURL from "../../url";

class PortfolioSimpleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mutax: 0
    };

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  deletePortfolio(victim) {
    var deleteConfirm = confirm("정말 삭제하시겠습니까?");

    if (deleteConfirm) {
      var userToken = cookies.getCookie("user-token");
      if (!userToken) {
        alert("세션이 종료되었습니다. 다시 로그인해주세요.");
        Router.push("/");
      } else {
        return fetch(baseURL + "/mypage/portfolio", {
          headers: {
            accept: "application/json",
            Authorization: "bearer " + userToken,
            "Content-Type": "application/json"
          },
          method: "DELETE",
          body: JSON.stringify({
            portfolioId: victim
          })
        })
          .then(res => {
            if (res.ok) {
            } else {
              throw res.statusText;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }

  handleClickDelete() {
    var state = this.state;
    var toggleMutex = (curMutex => {
      var curState = JSON.parse(JSON.stringify(state));
      curState.mutax = curMutex;
      this.setState(curState);
    }).bind(this);

    var fetchPortfolios = this.props.fetchPortfolios;

    if (this.state.mutax == 0) {
      toggleMutex(1);

      this.deletePortfolio(this.props.id).finally(() => {
        toggleMutex(0);
        fetchPortfolios();
      });
    }
  }

  render() {
    var type = this.props.type;
    var addPost = this.props.addPost;
    var portfolio = this.props.portfolio;

    return (
      <div
        className={
          "portfolio-simple-container " +
          (type ? "portfolio-simple-container-" + type : "")
        }
      >
        <div className="portfolio-simple-container-space-between">
          <div className="portfolio-simple-left">
            <img
              className="portfolio-simple-img"
              src={
                this.props.portfolio.thumbnailImage
                  ? this.props.portfolio.thumbnailImage
                  : "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              }
            />
            <div className="portfolio-simple-contents-container">
              <div className="portfolio-simple-title">
                {this.props.portfolio.title ? this.props.portfolio.title : ""}
              </div>
              <div className="portfolio-simple-row">
                <div className="portfolio-simple-row-title">담당 역할</div>
                <div className="portfolio-simple-row-content">
                  {this.props.portfolio.myRole
                    ? this.props.portfolio.myRole
                    : "없음"}
                </div>
              </div>
              <div className="portfolio-simple-row">
                <div className="portfolio-simple-row-title">사용스택</div>
                <div className="portfolio-simple-row-content">
                  {this.props.portfolio.useStack
                    ? this.props.portfolio.useStack
                    : "없음"}
                </div>
              </div>
              <div className="portfolio-simple-row">
                <div className="portfolio-simple-row-title">링크</div>
                <div className="portfolio-simple-row-content">
                  {this.props.portfolio.link
                    ? this.props.portfolio.link == ""
                      ? "없음"
                      : this.props.link
                    : "없음"}
                </div>
              </div>
            </div>
          </div>
          {type != "applicant" ? (
            <div className="portfolio-simple-right">
              <div
                className="portfolio-simple-delete-button"
                onClick={this.handleClickDelete}
              >
                삭제
              </div>
              <div
                className="portfolio-simple-edit-button"
                onClick={() => addPost(portfolio)}
              >
                편집
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default PortfolioSimpleComponent;
