import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./core/store/store";
import {Provider} from "react-redux";
import {theme} from "./core/theme/theme";
import {ThemeProvider} from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>
);
