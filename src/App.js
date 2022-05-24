import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Layout from "./containers/Layout";
import Register from "./containers/Register";
import Login from "./containers/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route  path="/register" component={Register} />
          <Route  path="/login" component={Login} />
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
