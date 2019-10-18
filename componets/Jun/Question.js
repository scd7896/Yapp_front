import "../../css/Jun/question.scss";
import classNames from "classnames";

function Question({ num }) {
  return (
    <>
      <h6>Q</h6> <span id="num">{num}</span>
      <input placeholder="질문을 입력" />
    </>
  );
}

Question.defaultProps = {
  num: 1
};

export default Question;
