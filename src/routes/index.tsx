import React from "react";
import { Switch, Route } from "react-router-dom";

import ListBooks from "../pages/ListBooks";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListBooks} />
    </Switch>
  );
};

export default Routes;
