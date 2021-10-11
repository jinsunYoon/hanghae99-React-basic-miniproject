import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  const history = useHistory();

  return (
      <HeaderBox>
          <Title>주소가<br/>올바르지 않아요!</Title>
          <Btn>
              <button onClick={() => {
                      history.push("/");
                  }}>
                  메인으로 돌아가기
              </button>
          </Btn>
      </HeaderBox>
  );
};

const HeaderBox = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Btn = styled.div`
  padding: 0px 16px;
  display: flex;
  justify-content: space-around;

  & button{
      border-style: none;
      background: none;
      border: 1px solid #7a80e3;
      border-radius: 5px;
      color: #7a80e3;
      width: 130px;
      height: 30px;
      cursor: pointer;
  }
`;


const Title = styled.div`
  background: linear-gradient(to right bottom, #7d7de5, #27e9a1); 
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export default NotFound;