import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import Operand from "./pages/Operand";
import NotFound from "./pages/NotFound";

type RouteProps = {
  path: string;
  component: React.FC;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/operand" component={Operand} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
