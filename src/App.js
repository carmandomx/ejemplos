import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Topics from "./components/Topics";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            render={({ match }) => (
              <Layout>
                {" "}
                <p>Esta es mi ruta Home {match.url}</p>
              </Layout>
            )}
            exact
            path="/"
          />
          <Route path="/about">
            <Layout>Este es About y quiero ver mi ruta</Layout>
          </Route>
          <Route path="/login">
            Hola invitado(a) porfavor inicia sesion
            <button>Inicia sesion</button>
          </Route>
          <Route path="/topics" component={Topics} />

          <Route path="*">Alto ahi loka</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
