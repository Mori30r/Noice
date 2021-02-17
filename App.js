import React, { useState } from "react";
import NoiceNavigator from "./navigations/NoiceNavigations";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { noiceReducers } from "./store/reducers/noiceReducers";
import { enableScreens } from "react-native-screens";
import { voiceOptionReducers } from "./store/reducers/voiceOptionReducers";
import ReduxThunk from "redux-thunk";
import { initDatabase } from "./helpers/database/noiceDatabase";
import AppLoading from "expo-app-loading";

initDatabase().then(() => console.log("successful"));
enableScreens();
export default function App() {
  const [isLoading, setISLoading] = useState(true);
  const rootStore = combineReducers({
    noice: noiceReducers,
    voiceOption: voiceOptionReducers,
  });
  const store = createStore(rootStore, applyMiddleware(ReduxThunk));
  return isLoading ? (
    <AppLoading
      startAsync={initDatabase}
      onFinish={() => setISLoading(false)}
      onError={console.warn}
    />
  ) : (
    <Provider store={store}>
      <NoiceNavigator />
    </Provider>
  );
}
