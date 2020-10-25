// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./features/counter/index";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Tech from "./Sections/tech";
import NavB from "./components/navbar";
import Home from "./Sections/home";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancers = compose(middlewareEnhancer);

const AppWrapper = () => {
  const store = createStore(rootReducer, undefined, composedEnhancers);

  return (
    <Provider store={store}>
      {/* // Set context */}
      <App />
      {/* // Now App has access to context */}
    </Provider>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavB />
        <Route path="/Sections/tech" exact component={Tech} />
        <Route path="/" exact component={Home} />
      </div>
      ;
    </Router>
  );
};

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
export default AppWrapper;
