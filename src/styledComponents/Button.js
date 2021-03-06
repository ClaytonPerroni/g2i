import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  font-family: 'Courier', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.5rem 0.5rem;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }

  &:hover {
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
      2px 2px 0px 0px, 2px 2px 0px 0px;
    top: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    padding: 0.75em 1.5em;
  }
`;

export default Button;
