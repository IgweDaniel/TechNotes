import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./src/screens";
import { ApplicationProvider } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { StateProvider } from "./src/context";

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
          <Screens />
        </ApplicationProvider>
      </NavigationContainer>
    </StateProvider>
  );
};
