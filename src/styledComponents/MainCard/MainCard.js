import styled from 'styled-components';

const MainCard = styled.div`
  max-width: 1024;
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  border: 5px solid #000;
  transition: height 1s;

  @media (max-width: 420px) {
    margin: 10px;
  }
`;

export default MainCard;
