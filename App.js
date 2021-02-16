import React from "react";
import NoiceNavigator from "./navigations/NoiceNavigations";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { noiceReducers } from "./store/reducers/noiceReducers";
import { enableScreens } from "react-native-screens";
import { voiceOptionReducers } from "./store/reducers/voiceOptionReducers";
import ReduxThunk from "redux-thunk";
import { initDatabase } from "./helpers/database/noiceDatabase";

initDatabase()
  .then(() => console.log("database successful"))
  .catch(() => console.log("database failed"));
enableScreens();

export default function App() {
  const rootStore = combineReducers({
    noice: noiceReducers,
    voiceOption: voiceOptionReducers,
  });
  const store = createStore(rootStore, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <NoiceNavigator />
    </Provider>
  );
}
