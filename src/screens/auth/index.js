import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { Center } from "../../components";
import { store } from "../../context";

const Auth = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  function onPress() {
    dispatch({
      type: "login",
      payload: {
        avatar:
          "https://t3.ftcdn.net/jpg/02/98/27/52/240_F_298275220_3gJda9tP6gNlLfdk28Is6fKicQRHDHt6.jpg",
        name: "Daniel Igwe",
        bio:
          "Remote FullStack Software Developer working for square Space. I love writing about react, Node, Graphql and Microservices",
        followers: 23,
        following: "1k",
      },
    });
  }
  return (
    <Center>
      <Text> Auth</Text>
      <Button onPress={onPress}>LOGIN</Button>
    </Center>
  );
};

export default Auth;
