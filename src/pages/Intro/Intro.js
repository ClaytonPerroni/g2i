/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFetchError,
  fetchTrueOrFalse,
  selectQuestionsLoaded,
} from 'features/question';
import FadeAnim from 'styledComponents/FadeAnim';
import { Row, Col } from 'styledComponents';
import { Button } from 'styledComponents';
import { ErrorString, ExtendingDiv, Underline } from './styledComponents';
import PAGES from '../routes';
import strings from '../../features/localization/strings';

function Intro() {
  const dispatch = useDispatch();
  const fetchError = useSelector(selectFetchError);
  const questionsLoaded = useSelector(selectQuestionsLoaded);

  useEffect(() => {
    // hardcode to boolean
    dispatch(fetchTrueOrFalse('boolean'));
  }, [dispatch, fetchTrueOrFalse]);

  return (
    <FadeAnim>
      <ExtendingDiv trigger={questionsLoaded || fetchError}>
        <Row>
          <Col>
            <h1>{strings.intro_title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Underline />
          </Col>
        </Row>
        <Row className="margin-top-25">
          <Col>
            <div>{strings.intro_numberOfQuestions}</div>
          </Col>
        </Row>
        <Row className="margin-top-25">
          <Col>
            <div>{strings.intro_callToAction}</div>
          </Col>
        </Row>
        <Row className="margin-top-25">
          <Col sm={{ span: 4, offset: 4 }}>
            {!fetchError && questionsLoaded && (
              <FadeAnim delay={250}>
                <Link to={PAGES.QUIZ}>
                  <Button type="button">{strings.intro_beginButton}</Button>
                </Link>
              </FadeAnim>
            )}
            {fetchError && (
              <FadeAnim delay={250}>
                <ErrorString>{strings.intro_fetchError}</ErrorString>
              </FadeAnim>
            )}
          </Col>
        </Row>
      </ExtendingDiv>
    </FadeAnim>
  );
}

Intro.propTypes = {};

export default Intro;
