import React from "react";
import { createGlobalStyle } from "styled-components";

import { Provider } from "react-redux";
import store from "./store";

import Playground from "./components/Playground";

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Playground />
    </>
  </Provider>
);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default App;
