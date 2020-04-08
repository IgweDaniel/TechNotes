import React, { useRef } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text, Avatar } from "@ui-kitten/components";
import { Feather } from "@expo/vector-icons";
import Markdown from "react-native-easy-markdown";

import Animated, { multiply } from "react-native-reanimated";
import { Center, Header } from "../../components";
import { HEADER_HEIGHT } from "../../components/header";

const ArticleScreen = ({
  navigation,
  route: {
    params: { post },
  },
}) => {
  const scrollY = new Animated.Value(0);

  const diffClampNode = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const translateY = Animated.multiply(diffClampNode, -1);

  return (
    <>
      <Header
        navigation={navigation}
        name={""}
        style={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          transform: [
            {
              translateY,
            },
          ],
        }}
      />
      <Animated.ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          marginVertical: HEADER_HEIGHT,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
          <Text
            category="h4"
            style={{
              marginVertical: 10,
            }}
          >
            {post.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              marginVertical: 5,
            }}
          >
            <Avatar size="small" source={{ uri: post.user.avatar }} />
            <Text style={{ color: "#888", marginHorizontal: 10 }}>
              {post.user.username}
            </Text>
          </View>
        </View>
        <Image
          resizeMode="cover"
          style={{ ...styles.postImage }}
          source={{ uri: post.images[0] }}
        />
        <Markdown
          renderImage={(src) => {
            return (
              <Image
                key={src}
                resizeMode="cover"
                style={{ ...styles.postImage }}
                source={{ uri: src }}
              />
            );
          }}
        >
          {post.content}
        </Markdown>
        {/* <Text
          style={{
            marginVertical: 20,
            paddingVertical: 30,
            paddingHorizontal: 10,
            height: "100%",
          }}
        >
          <Text
            category="h6"
            style={{
              fontSize: 40,
              textAlignVertical: "center",
            }}
          >
            {post.preview[0]}
          </Text>

          <Text
            dataDetectorType="all"
            category="p1"
            style={{
              lineHeight: 1.3,
              textAlignVertical: "auto",
            }}
          >
            {post.preview.slice(1)}
          </Text>
        </Text> */}
      </Animated.ScrollView>

      <Animated.View
        style={{
          ...styles.stickyActionBar,
          transform: [
            {
              translateY: multiply(translateY, -1),
            },
          ],
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          <Feather size={22} color="#888" name="heart" />
          <Feather size={22} color="#888" name="bookmark" />
        </View>
      </Animated.View>
    </>
  );
};

export default ArticleScreen;

const styles = StyleSheet.create({
  postImage: {
    height: 150,
    width: "100%",
  },
  stickyActionBar: {
    paddingHorizontal: 20,
    position: "absolute",
    justifyContent: "center",
    bottom: 0,
    backgroundColor: "#fff",
    height: HEADER_HEIGHT,
    width: "100%",
    left: 0,
  },
});
