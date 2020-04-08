import React, { useContext } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";

const { height: HEIGHT } = Dimensions.get("screen");
import { Text, Avatar } from "@ui-kitten/components";
import { store } from "../../context";

import NewPhotoIcon from "../../../assets/photo.svg";
import Feed from "../../components/feed";
import { Header } from "../../components";

// #242a38

const HomeScreen = ({ navigation }) => {
  const globalState = useContext(store);

  const {
    state: { user },
  } = globalState;

  return (
    <>
      <Header isHome={true} navigation={navigation} name="Home" />

      <Feed navigation={navigation} style={{}} />
      <View style={{ ...styles.floatButton }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("NewArticle")}
        >
          <NewPhotoIcon fill="#fff" height={22} width={22} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  floatButton: {
    position: "absolute",
    top: HEIGHT * (75 / 100),
    right: 0,
    marginHorizontal: 20,
    backgroundColor: "#35d187",
    borderRadius: 30,
    elevation: 10,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
  },
});
