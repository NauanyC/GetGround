import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
