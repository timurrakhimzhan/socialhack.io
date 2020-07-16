import React from 'react';
import Routing from "./router";
import styled from "styled-components";
import Header from "./router/header";
import {withRouter} from "react-router";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
      <AppWrapper>
        <Header/>
        <Routing/>
      </AppWrapper>
  );
}

export default withRouter(App);
