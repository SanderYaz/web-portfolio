import React from "react";
import styles from "./app.scss";
import Intro from "./modules/intro/intro";
import Landing from "./modules/landing/landing";
import ProjectDetailsPage from "./modules/projectDetailsPage";
import Div from "Common/components/div";
import Loader from "./modules/loader/loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Div className={styles.main_container}>
      <Loader>
        <Router>
          <Switch>
            <Route path="/">
              <Landing />
              <Route exact path="/project/:projectSlug?" component={ProjectDetailsPage} />
            </Route>
          </Switch>
        </Router>
      </Loader>
    </Div>
  );
}

export default App;
