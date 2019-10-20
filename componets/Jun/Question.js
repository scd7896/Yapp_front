import "../../css/Jun/question.scss";
import classNames from "classnames";

function Question({ num }) {
  return (
    <div className="question_section">
      <div className="question_num">
        <h6>Q</h6> <span id="num">{num}</span>
      </div>

      <input placeholder="질문을 입력하세요 ex) 성실히 참여 할 수 있나요?" />
    </div>
  );
}

Question.defaultProps = {
  num: 1
};

export default Question;
