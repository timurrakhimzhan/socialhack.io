import React from 'react';
import Routing from "./router";
import styled from "styled-components";
import Header from "./router/header";
import {withRouter} from "react-router";
import { Provider } from 'react-redux';
import {store} from "./state/store";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
      <Provider store={store}>
          <AppWrapper>
              <Header/>
              <Routing/>
          </AppWrapper>
      </Provider>

  );
}

export default withRouter(App);
