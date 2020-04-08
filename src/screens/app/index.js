import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { log, concat } from "react-native-reanimated";
import { Layout, Button, Text, Avatar } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import HomeScreen from "./home";
import ProfileScreen from "./profile";
import BookmarkScreen from "./bookmark";
import NotificationsScreen from "./notifications";
import SearchScreen from "./search";
import NewScreen from "./new";

import { Feather } from "@expo/vector-icons";

import HomeIcon from "../../../assets/home.svg";
import NotificationIcon from "../../../assets/notification.svg";
import BookMarkIcon from "../../../assets/bookmark.svg";

import SettingsIcon from "../../../assets/settings.svg";
import ProfileIcon from "../../../assets/profile.svg";

import { store } from "../../context";

import SettingsScreen from "./settings";

const AppTab = createBottomTabNavigator();
const Tab = ({ style }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        elevation: 10,
        width: "100%",
        backgroundColor: "#fff",
        ...style,
      }}
    >
      <AppTab.Navigator
        tabBarOptions={{
          showLabel: false,
          inactiveTintColor: "#888",
          activeTintColor: "#35d187",

          style: {
            elevation: 0,
            borderTopWidth: 0,
            elevation: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: "90%",
            position: "absolute",
            alignSelf: "center",
            marginHorizontal: "5%",
          },
          tabStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <AppTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <HomeIcon height={size} fill={color} width={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />

        <AppTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather size={size} color={color} name="search" />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />

        <AppTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <NotificationIcon height={size} fill={color} width={size} />
            ),
          }}
          name="Notification"
          component={NotificationsScreen}
        />
        <AppTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <BookMarkIcon height={size} fill={color} width={size} />
            ),
          }}
          name="Bookmark"
          component={BookmarkScreen}
        />
      </AppTab.Navigator>
    </Animated.View>
  );
};

const AppDrawer = createDrawerNavigator();

function CustomDrawerContent({ user, dispatch, navigation, ...props }) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        paddingTop: 10,
        flex: 1,
      }}
      {...props}
    >
      <View
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: StyleSheet.hairlineWidth,
          padding: 40,
          marginBottom: 10,
          height: 200,
        }}
      >
        <Avatar
          size="giant"
          style={{ height: 80, width: 80 }}
          source={{ uri: user.avatar }}
        />
        <Text style={{ marginVertical: 10, ...styles.customDrawerText }}>
          {user.name.toUpperCase()}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Text style={{ ...styles.customDrawerText }} category="c1">
            {user.followers} Followers
          </Text>
          <Text
            style={{ ...styles.customDrawerText, marginHorizontal: 5 }}
            category="c1"
          >
            {user.following} Following
          </Text>
        </View>
      </View>

      <DrawerItem
        label="Profile"
        labelStyle={{
          // marginLeft: -20
          marginHorizontal: 20,
        }}
        // icon={({ focused, color, size }) => (
        //   <ProfileIcon height={size} width={size} fill={color} />
        // )}
        onPress={() => navigation.navigate("Profile")}
      />
      <DrawerItem
        label="Settings"
        labelStyle={{
          // marginLeft: -20
          marginHorizontal: 20,
        }}
        // icon={({ focused, color, size }) => (
        //   <SettingsIcon height={size} width={size} fill={color} />
        // )}
        onPress={() => navigation.navigate("Settings")}
      />
    </DrawerContentScrollView>
  );
}

const App = ({ navigation }) => {
  const globalState = useContext(store);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -40],
  });

  const animatedStyle = {
    // transform: [{ scale: scale }],
  };

  const {
    state: { user },
    dispatch,
  } = globalState;

  return (
    <AppDrawer.Navigator
      // overlayColor="transparent"
      // sceneContainerStyle={{
      //   backgroundColor: "transparent",
      //   zIndex: 2,
      //   left: translateX,
      // }}
      // drawerType="slide"
      drawerContent={(props) => {
        setProgress(props.progress);
        return (
          <CustomDrawerContent
            navigation={navigation}
            dispatch={dispatch}
            user={user}
            {...props}
          />
        );
      }}
      drawerStyle={{ width: "70%" }}
      initialRouteName="Home"
    >
      <AppDrawer.Screen name="App">
        {(props) => <Tab {...props} style={animatedStyle} />}
      </AppDrawer.Screen>
      <AppDrawer.Screen name="Settings" component={SettingsScreen} />
      <AppDrawer.Screen name="Profile" component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
};
export default App;

const styles = StyleSheet.create({
  customDrawerText: { color: "#000" },
});
