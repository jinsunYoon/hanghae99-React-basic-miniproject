//List.js
import React, { useEffect } from "react";
import styled from "styled-components";
import { Route, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadCardFB } from "./redux/module/card";
import Aos from "aos";
import "aos/dist/aos.css";

const List = (props) => {
  const history = useHistory();
  const my_lists = useSelector((state) => state.card.list);
  console.log(my_lists);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCardFB());
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box>
      <Route>
        {my_lists.map((list, index) => {
          return (
            <Dictionary key={index}>
              <p>
                <Name key={index}>{list.vocab}</Name>
              </p>
              <p>
                <Ex key={index}>{list.definition}</Ex>
              </p>
              <p>
                <Exam key={index}>{list.example}</Exam>
              </p>
            </Dictionary>
          );
        })}
      </Route>
    </Box>
  );
};

const Box = styled.div` 
    margin: 20px auto 0px auto;
    width: 270px;
    max-height: 430px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
`;

const Dictionary = styled.div`
    width: 210px;
    padding: 0px 16px 0px 16px;
    border: 1px solid #c1e2ff;
    margin-bottom: 10px;
    border-radius: 10px;
    & p{
        font-size: 15px;
        font-weight: bold;
        color: gray;
        border-bottom: 1px dotted lightgray;
    }
`;

const Name = styled.div`
    color: black;
    font-size: 20px;
`;

const Ex = styled.div`
    color: gray;
    font-size: 16px;
`;

const Exam = styled.div`
    color: darkgray;
    font-size: 15px;
`;

export default List;
