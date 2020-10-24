import React from "react";

import { Counter } from "./features/counter/Counter";
import { TrendingPage } from "./features/counter/TrendingPage";
// import NavB from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./features/counter/index";

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
    <div className="App">
      <header className="App-header">
        {/* <NavB /> */}
        <Counter />

        <TrendingPage />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <Footer />
    </div>
  );
};

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
export default AppWrapper;
