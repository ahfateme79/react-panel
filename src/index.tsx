import ReactDOM from "react-dom";
import Aside from "./components/aside/aside";
import "./index.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import "./assets/css/fontello-embedded.css";
import Header from "./components/header/Header";
import Main from "./components/main/main";
import routes from "./router";
import Login from "./containers/login/login";
import { createStore } from "redux";
import Allreducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(Allreducer);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  width: 80%;
`;
interface propsprivet {
  children: any;
  res?: any;
  exact: boolean;
  path: string;
}

const Privetrout: React.FC<propsprivet> = ({ children, ...res }) => {
  const token = sessionStorage.getItem("auth");

  return (
    <Route
      {...res}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
const Index = () => {

  return (
    <Provider store={store}>
      <Wrapper>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />

            <Router>
              <Aside />
              <Left>
                <Header />
                <Switch>
                  {routes.map((n) => {
                    let Container = require(`${n.containerPath}`).default;
                    return (
                      <Privetrout exact path={n.path}>
                        <Container />
                      </Privetrout>
                    );
                  })}
                </Switch>
              </Left>
            </Router>
          </Switch>
        </Router>
      </Wrapper>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
