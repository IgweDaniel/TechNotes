import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, StatusBar } from "react-native";
import { Text, Avatar } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { store } from "../context";

export const HEADER_HEIGHT = 60 + StatusBar.currentHeight;

{
  /* <View style={{ width: "10%" }}>
<TouchableOpacity
  activeOpacity={0.6}
  onPress={() => navigation.toggleDrawer()}
>
  <Avatar size="small" source={{ uri: avatar }} />
</TouchableOpacity>
</View> */
}

export const Header = ({ navigation, name, style, render, isHome }) => {
  const globalState = useContext(store);

  const {
    state: { user },
  } = globalState;

  return (
    <Animated.View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: HEADER_HEIGHT,
        width: "100%",
        paddingTop: StatusBar.currentHeight - 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
        backgroundColor: "#FFf",
        ...style,
      }}
    >
      {isHome ? (
        <View
          style={{
            width: "18%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.toggleDrawer()}
          >
            <Avatar size="small" source={{ uri: user.avatar }} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: "15%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons size={25} name="ios-arrow-back" />
        </TouchableOpacity>
      )}
      <View style={{ width: "65%", justifyContent: "center" }}>
        <Text category="h6">{name}</Text>
      </View>
      {render && <View style={{ justifyContent: "center" }}>{render()}</View>}
    </Animated.View>
  );
};

const styles = StyleSheet.create({});
