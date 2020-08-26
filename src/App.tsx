import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";
import IPValidation from "./pages/IPValidation";
import Operand from "./pages/Operand";
import WebStorage from "./pages/WebStorage";
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
          <Route exact path="/ip-validation" component={IPValidation} />
          <Route exact path="/operand" component={Operand} />
          <Route exact path="/webstorage" component={WebStorage} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
