import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'styledComponents';
import strings from '../../../features/localization/strings';

function BooleanQuestion({ index, answerQuestion }) {
  return (
    <Row>
      <Col sm={{ span: 4, offset: 2 }}>
        <Button
          data-testid={`question${index}_trueButton`}
          type="button"
          onClick={() => {
            answerQuestion(false);
          }}
        >
          {strings.question_booleanFalse}
        </Button>
      </Col>
      <Col sm={4}>
        <Button
          data-testid={`question${index}_falseButton`}
          type="button"
          onClick={() => {
            answerQuestion(true);
          }}
        >
          {strings.question_booleanTrue}
        </Button>
      </Col>
    </Row>
  );
}

BooleanQuestion.defaultProps = {};

BooleanQuestion.propTypes = {
  index: PropTypes.number.isRequired,
  answerQuestion: PropTypes.func.isRequired,
};

export default BooleanQuestion;
