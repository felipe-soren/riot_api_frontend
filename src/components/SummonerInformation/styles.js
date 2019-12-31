import styled from 'styled-components';

import 'font-awesome/css/font-awesome.css'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Summoner = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;

  button {
    border: none;
    background-color: transparent;
    outline: none;
    padding: 10px;
  }

  img {
    width: 64px;
  }
  
  strong {
    font-size: 24px;
    margin-top: 10px;
  }

  small {
    font-size: 14px;
    color: #666;
  }
}

ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;