import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FadeAnim from 'styledComponents/FadeAnim';
import {
  selectNumberOfQuestions,
  selectQuestions,
  resetQuestions,
  scoreQuiz,
} from 'features/question';
import { Button, Row, Col } from 'styledComponents';
import { Link } from 'react-router-dom';
import { QuestionColumn, SummaryRow } from './styledComponents';
import PAGES from '../routes';
import strings from '../../features/localization/strings';

function Results() {
  const dispatch = useDispatch();

  const resetQuestionsDis = () => dispatch(resetQuestions());

  const questions = useSelector(selectQuestions);
  const numberOfQuestions = useSelector(selectNumberOfQuestions);

  const score = scoreQuiz(questions);

  return (
    <FadeAnim>
      <h1 className="text-align-center">{strings.results_title}</h1>
      <Row style={{ marginBottom: 20 }}>
        <Col className="text-align-center">
          <p
            className="text-align-center"
            style={{ fontSize: '1.5em' }}
          >{`${score} / ${numberOfQuestions}`}</p>
        </Col>
      </Row>
      {questions.map((question, index) => {
        const correct =
          question.correct_answer.toLowerCase() ===
          String(question.user_answer).toLowerCase();
        return (
          <FadeAnim key={question.question} delay={(index + 1) * 250}>
            <SummaryRow color={correct ? 'black' : 'red'}>
              <Col sm={2} className="margin-auto">
                {question.user_answer}
              </Col>
              <Col>
                <QuestionColumn>{question.question}</QuestionColumn>
              </Col>
            </SummaryRow>
          </FadeAnim>
        );
      })}
      <Row>
        <Col sm={{ span: 4, offset: 4 }}>
          <FadeAnim delay={(numberOfQuestions + 1) * 250}>
            <Link to={PAGES.ROOT} onClick={resetQuestionsDis}>
              <Button type="button">{strings.results_playAgain}</Button>
            </Link>
          </FadeAnim>
        </Col>
      </Row>
    </FadeAnim>
  );
}

Results.propTypes = {};

export default Results;
