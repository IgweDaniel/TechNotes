import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";

import { Center, Header } from "../../components";

const NewScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <Center
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#fff",
      }}
    >
      <Header
        navigation={navigation}
        render={() => (
          <Button
            style={{ ...styles.button }}
            size="small"
            onPress={() => null}
          >
            Post
          </Button>
        )}
      />
      <TextInput
        autoFocus={true}
        multiline={true}
        style={{
          width: "100%",
          padding: 20,
        }}
        placeholder={`
        Write Something....
        `}
        onChangeText={(text) => setText(text)}
        value={text}
      ></TextInput>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          borderTopColor: "#ccc",
          width: "100%",
          padding: 15,
          borderTopWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <Feather size={20} color="#35d187" name="image" />
          <Feather size={20} color="#35d187" name="link" />
          <Feather size={20} color="#35d187" name="tag" />
        </View>
      </View>
    </Center>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  button: {
    borderColor: "#35d187",
    backgroundColor: "#35d187",
  },
});
