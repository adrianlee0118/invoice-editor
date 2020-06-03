import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { createMuiTheme } from "@material-ui/core/styles";

import rootReducer from "./reducers/reducer";
import Invoice from "./components/app";

const store = createStore(rootReducer, applyMiddleware(thunk));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      light: "#e33371",
      main: "#dc004e",
      contrastText: "#ffcc00",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <Invoice />
    </MuiThemeProvider>
  </Provider>
);
