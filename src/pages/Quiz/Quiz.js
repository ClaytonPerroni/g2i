/* eslint-disable */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'styledComponents';
import FadeAnim from 'styledComponents/FadeAnim';
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectNumberOfQuestions,
} from 'features/question/redux/QuestionSlice';
import QuizQuestion from 'components/question/QuizQuestion';
import { resetQuestions } from '../../features/question';
import { ExitButton, QuestionColumn } from './styledComponents';
import PAGES from '../routes';
import strings from '../../features/localization/strings';

function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetQuestionsDis = () => dispatch(resetQuestions());

  const question = useSelector(selectCurrentQuestion);
  const numberOfQuestions = useSelector(selectNumberOfQuestions);
  const currentIndex = useSelector(selectCurrentQuestionIndex);

  useEffect(() => {
    if (question === undefined) {
      navigate(PAGES.RESULTS);
    }
  }, [question, navigate]);

  if (!question) return null;

  return (
    <FadeAnim>
      <Row style={{ height: 80 }}>
        <Col xs={12} sm={2} style={{ paddingBottom: 15 }}>
          <Link to={PAGES.INTRO} onClick={resetQuestionsDis}>
            <ExitButton type="button" style={{ maxWidth: 100 }}>
              {strings.quiz_exitButton}
            </ExitButton>
          </Link>
        </Col>
        <Col xs={12} sm={8} className="text-align-center margin-auto">
          <h1>{question?.category}</h1>
        </Col>
        <Col xs={0} sm={2} />
      </Row>
      <Row>
        <Col className="text-align-center">
          {strings.formatString(
            strings.quiz_currentQuestionCounter,
            currentIndex + 1,
            numberOfQuestions
          )}
        </Col>
      </Row>
      <Row className="margin-bottom-5">
        <Col>
          <QuestionColumn>{question.question}</QuestionColumn>
        </Col>
      </Row>
      <QuizQuestion question={question} index={currentIndex} />
    </FadeAnim>
  );
}

Quiz.propTypes = {};

export default Quiz;
