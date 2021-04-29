import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";
import { themeLight } from "./utils/theme";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider theme={themeLight}>
          <CssBaseline />
          <Routes />
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
