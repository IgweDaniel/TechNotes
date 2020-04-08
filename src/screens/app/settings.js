import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "@ui-kitten/components";
import LogoutIcon from "../../../assets/logout.svg";
import { store } from "../../context";
import { Center } from "../../components";
import { Header } from "../../components";

const SettingsScreen = ({ navigation }) => {
  const { dispatch } = useContext(store);
  return (
    <>
      <Header navigation={navigation} name="Settings" />
      <Center>
        <Text>SettingsScreen</Text>
        <Button
          icon={() => <LogoutIcon width={20} height={20} fill="#fff" />}
          onPress={() => dispatch({ type: "logout" })}
        >
          LOGOUT
        </Button>
      </Center>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
