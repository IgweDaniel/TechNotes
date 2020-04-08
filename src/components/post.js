import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Avatar, Text } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
import { store } from "../context";

const Post = ({
  _id,
  images,
  viewPost,
  date,
  preview,
  content,
  title,
  user,
}) => {
  const { dispatch } = useContext(store);

  return (
    <View style={{ ...styles.wrapper }}>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() =>
          viewPost({ _id, images, date, content, preview, title, user })
        }
        style={{ ...styles.postContainer }}
      >
        <View style={{ ...styles.post }}>
          <Text category="h6">{title}</Text>
          <Text category="c1" style={{ marginVertical: 10 }}>
            {preview.split(" ").slice(0, 15).join(" ")}...
          </Text>
        </View>
        <View style={{ ...styles.imageWrapper }}>
          <Image
            resizeMode="cover"
            style={{ ...styles.image }}
            source={{
              uri: images[0],
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={{ ...styles.meta }}>
        <View style={{ ...styles.avatarContainer }}>
          <Avatar
            style={styles.avatar}
            size="small"
            source={{ uri: user.avatar }}
          />
        </View>
        <View style={{ ...styles.metaContent }}>
          <Text category="p1" style={{ color: "#000" }}>
            {user.username}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.actions }}>
        <Feather size={19} color="#888" name="heart" />
        <Feather size={19} color="#888" name="bookmark" />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
    // height: 250,
    minHeight: 250,
    maxHeight: 350,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 0,
  },
  postContainer: {
    height: "60%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  post: { width: "56%" },
  imageWrapper: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  avatarContainer: {
    width: "16%",
  },

  avatar: {},
  meta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  metaContent: { width: "85%", justifyContent: "center" },

  actions: {
    height: 20,
    width: "18%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
});
