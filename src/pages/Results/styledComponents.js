/* eslint-disable */
import styled from 'styled-components';
import { Row } from 'styledComponents';

export const SummaryRow = styled(Row)`
  color: ${({ color }) => color};
  text-align: center;
  max-width: 700px;
  margin: auto;
  padding-bottom: 20px;
`;

export const QuestionColumn = styled.div`
  text-align: left;
  justify-content: center;
  align-content: center;
`;
