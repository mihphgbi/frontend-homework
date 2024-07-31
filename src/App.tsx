import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import AppRoute from "./route/AppRoute";

function App() {
  return (
      <Provider store={store}>
          <AppRoute/>
      </Provider>
  );
}

export default App;
