import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id"> {/* Detail Route렌더링 */}
          <Detail />
        </Route>
        <Route path="/"> {/* Home Route렌더링 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
