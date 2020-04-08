import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { Center, Header } from "../../components";
import { store } from "../../context";
import { Avatar, Text } from "@ui-kitten/components";
import Post from "../../components/post";

const myposts = [
  {
    _id: "5e898e4196990117edff8dc3",
    index: 0,
    title: "Building Scalable Microservices with Nodejs",
    preview:
      "Why is markdown cool?  because it lets us do simple formatting  easily without_ the need for complex CMS data structures and you can outsource your work to the content creators!",
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t3.ftcdn.net/jpg/02/64/34/76/240_F_264347640_SH1AdGYtfcs3lRS5xUqXYoNXayQTdgQw.jpg) > This is a blockquote \n\n" +
      "![We can add images!](http://placehold.it/300x300) \n" +
      "[Or link to places](http://foobar.com) \n",
    date: 1586147180696,
    images: [
      "https://t3.ftcdn.net/jpg/02/47/68/42/240_F_247684281_Y1Q7P0iC8UNzvLuuFOZQiWpMXfdPu2NJ.jpg",
    ],
    user: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/98/27/52/240_F_298275220_3gJda9tP6gNlLfdk28Is6fKicQRHDHt6.jpg",
      username: "Daniel Igwe",
    },
  },
  {
    _id: "5e898e4196990117edff8dc4",
    index: 0,
    title: "A Match Made In Heaven React and Redux.",
    preview:
      "As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in",
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t3.ftcdn.net/jpg/02/64/34/76/240_F_264347640_SH1AdGYtfcs3lRS5xUqXYoNXayQTdgQw.jpg) > This is a blockquote \n\n" +
      "![We can add images!](http://placehold.it/300x300) \n" +
      "[Or link to places](http://foobar.com) \n",
    date: 1586147180696,
    images: [
      "https://t4.ftcdn.net/jpg/01/99/75/33/240_F_199753327_RLz8rCJ0F7fDErAAqf73TPIJUNGBL2qd.jpg",
    ],
    user: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/98/27/52/240_F_298275220_3gJda9tP6gNlLfdk28Is6fKicQRHDHt6.jpg",
      username: "Daniel Igwe",
    },
  },
  {
    _id: "5e898e4196990117edfuuuu",
    index: 0,
    title: "The Billion Dolar Architecture at SquareSpace",
    preview:
      "For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.",
    date: 1586147180696,
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t4.ftcdn.net/jpg/01/91/91/63/240_F_191916364_ZbRzO2J8Ey2acqqJy4YdLfy205zCsJBI.jpg) > This is a blockquote \n\n" +
      "![We can add images!](https://t3.ftcdn.net/jpg/02/51/81/72/240_F_251817202_0L3GPp1a0fYCvmgRCaIyxv2Yges3EQM5.jpg) \n" +
      "[Or link to places](http://foobar.com) \n" +
      "_without_ the need for complex CMS data structures without_ the need for complex CMS data structures  without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n" +
      "_without_ the need for complex CMS data structures \n",
    images: [
      "data:image/png;base64,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",
    ],
    user: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/98/27/52/240_F_298275220_3gJda9tP6gNlLfdk28Is6fKicQRHDHt6.jpg",
      username: "Daniel Igwe",
    },
  },
];

const ProfileScreen = ({ navigation }) => {
  const {
    state: { user },
    dispatch,
  } = useContext(store);

  const viewPost = (post) => {
    navigation.navigate("Article", { post });
  };
  const renderItem = ({ item, index }) => (
    <View>
      <Post viewPost={viewPost} {...item} />
    </View>
  );

  function HeaderComponent() {
    return (
      <View style={{ width: "100%" }}>
        <Avatar
          size="giant"
          style={{ height: 80, width: 80, alignSelf: "center" }}
          source={{ uri: user.avatar }}
        />
        <View style={{ ...styles.userInfo }}>
          <Text style={{ ...styles.text }}>{user.name}</Text>
          <Text
            category="c1"
            style={{
              alignSelf: "center",
              marginVertical: 20,
              textAlign: "center",
              ...styles.text,
            }}
          >
            {user.bio}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "space-between",
              width: "65%",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: "#fff",
                padding: 10,
              }}
            >
              <Text style={{ ...styles.text }} category="p2">
                {user.followers} Followers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: "#fff",
                padding: 10,
              }}
            >
              <Text style={{ ...styles.tex }} category="p2">
                {user.following} Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      <Header navigation={navigation} name="Profile" />
      <Center style={{ justifyContent: "flex-start" }}>
        <FlatList
          ListHeaderComponent={() => <HeaderComponent />}
          ListHeaderComponentStyle={{
            paddingVertical: 40,
            paddingHorizontal: 10,
          }}
          style={{
            width: "100%",
          }}
          contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 10 }}
          data={myposts}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </Center>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userInfo: {},
  text: {},
});
