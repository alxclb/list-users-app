import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import { Home } from "./components/pages/home";
import { RepoList } from "./components/pages/repo-list";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users/:login/repos" name="repos">
                        <RepoList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
