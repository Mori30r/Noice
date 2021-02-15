import React from "react";
import NoiceNavigator from "./navigations/NoiceNavigations";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { noiceReducers } from "./store/reducers/noiceReducers";
import { enableScreens } from "react-native-screens";
import { voiceOptionReducers } from "./store/reducers/voiceOptionReducers";

enableScreens();

export default function App() {
  const rootStore = combineReducers({
    noice: noiceReducers,
    voiceOption: voiceOptionReducers,
  });
  const store = createStore(rootStore);
  return (
    <Provider store={store}>
      <NoiceNavigator />
    </Provider>
  );
}
