import React from "react";
import "./App.css";
import { store } from "./store/store";
import Homepage from "./components/HomePage";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Homepage />
      </Provider>
    </div>
  );
}

export default App;
