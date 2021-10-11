//App.js
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import {AddCircle} from "@material-ui/icons";

//list
import List from "./List";
import Post from "./Post";
import NotFound from "./NotFound";

const App = () => {
  const history = useHistory();

  return (
    <AppStyle>
      <AddBtn>
        <button onClick={(click) => {
          history.push("/post");
        }}>
          <AddCircle style={{ color: "#9b70e7", fontSize: "3em", background: "#fff", borderRadius: "50px" }} />
        </button>
      </AddBtn>
      <Container>
        <Main>
          <Switch>
            <Route path="/" exact>
              <HeaderBox>
                <Title>Dictionary</Title>
              </HeaderBox>
              <List/>
            </Route>
            <Route path="/post" exact>
              <Post />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Deco/>
      </Container>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 300px;
  height: 600px;
  background: linear-gradient(to right bottom, #7d7de5, #27e9a1); 
  padding: 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 10px 10px darkgrey;
`;

const Main = styled.div`
  width: 98%;
  height: 96%;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin: auto;
`;

const Deco = styled.div`
  width: 90px;
  height: 20px;
  background: linear-gradient(to right bottom, #6b94d7, #639fd0); 
  border-radius: 50px;
  margin: -590px auto;
`;

const HeaderBox = styled.div` 
  margin: 25px auto 10px auto;
  width: 270px;
  height: 40px;
  border-bottom: 1px dotted lightgray;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  background: linear-gradient(to right bottom, #7d7de5, #27e9a1); 
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

const AddBtn = styled.div`
  margin: 0px -80px -480px 0px;
  z-index: 6;

  & button{
    border-style: none;
    background: none;
    cursor: pointer;
  }
`;

export default App;
