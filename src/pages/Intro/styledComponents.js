/* eslint-disable */
import styled from 'styled-components';

export const ExtendingDiv = styled.div`
  text-align: center;
  max-height: ${({ trigger }) => (trigger ? '1000px' : '150px')};
  transition: max-height 3s ease-out;
`;

export const Underline = styled.div`
  width: 60%;
  height: 2;
  margin: auto;
  background-color: #000;
`;

export const ErrorString = styled.p`
  color: red;
`;
