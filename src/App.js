import React from "react";
// import { Card } from "./features/card/Card";
import { Flow } from "./features/flow/Flow.js";
import { AddEditFlow } from "./features/flow/AddEditFlow.js";
// import { AddEditCard } from "./features/card/AddEditCardForm";
import { Recall } from "./features/recall/Recall";
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        
        <Switch>
          <Route exact path="/flow" component={Flow} />
          <Route exact path="/flow" component={Flow} />
          <Route exact path="/flow/add" component={AddEditFlow} />
          <Route exact path="/flow/edit/:id" component={AddEditFlow} />
          <Route exact path="/flow/:id/recall" component={Recall} />
          <Route exact path="/">
            <Redirect to="/flow" />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
