import React, { useContext } from "react";
import App from "../screens/app";
import Auth from "../screens/auth";
import { createStackNavigator } from "@react-navigation/stack";
import { store } from "../context";

import NewScreen from "./app/new";
import ArticleScreen from "./app/article";

const ScreenStack = createStackNavigator();

const Screens = () => {
  const {
    state: { user },
  } = useContext(store);

  const forFade = ({ current: { progress }, closing }) => ({
    cardStyle: {
      opacity: progress,
    },
  });

  return (
    <ScreenStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
    >
      {user ? (
        <ScreenStack.Screen name="App" component={App} />
      ) : (
        <ScreenStack.Screen name="Auth" component={Auth} />
      )}
      {/* change this :modal meant to be here only */}
      <ScreenStack.Screen
        name="Article"
        options={{
          animationEnabled: true,
          cardStyleInterpolator: forFade,
        }}
        component={ArticleScreen}
      />

      <ScreenStack.Screen
        options={{ animationEnabled: true }}
        name="NewArticle"
        component={NewScreen}
      />
    </ScreenStack.Navigator>
  );
};

export default Screens;
