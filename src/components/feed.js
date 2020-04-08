import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Post from "./post";

const posts = [
  {
    _id: "5e898e4196990117edff8dc3",
    index: 0,
    title: "Python is the new Black",
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t3.ftcdn.net/jpg/02/64/34/76/240_F_264347640_SH1AdGYtfcs3lRS5xUqXYoNXayQTdgQw.jpg) > This is a blockquote \n\n" +
      "![We can add images!](http://placehold.it/300x300) \n" +
      "[Or link to places](http://foobar.com) \n",
    preview:
      "For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along https://akveo.github.io/react-native-ui-kitten/docs/components/text/api",
    date: 1586147180696,
    images: [
      "https://t3.ftcdn.net/jpg/03/06/62/18/240_F_306621899_E0827zvbZgpPolvTCgHR3MpGcF2jrjYv.jpg",
    ],
    user: {
      avatar:
        "https://t4.ftcdn.net/jpg/03/26/98/51/240_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      username: "Markus Norris",
    },
  },
  {
    _id: "5e898e4196990117edff8dc4",
    index: 0,
    title: "The Devops Unease",
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t3.ftcdn.net/jpg/02/64/34/76/240_F_264347640_SH1AdGYtfcs3lRS5xUqXYoNXayQTdgQw.jpg) > This is a blockquote \n\n" +
      "![We can add images!](http://placehold.it/300x300) \n" +
      "[Or link to places](http://foobar.com) \n",
    preview:
      "As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    date: 1586147180696,
    images: [
      "https://t4.ftcdn.net/jpg/02/90/22/59/240_F_290225913_HpgaxOy6sQgbqhDyn5uh8IncU6zxKWSS.jpg",
    ],
    user: {
      avatar:
        "https://t4.ftcdn.net/jpg/03/02/94/53/240_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg",
      username: "John Doe",
    },
  },
  {
    _id: "5e898e4196990117edfuuuu",
    index: 0,
    title: "Engineering at Uber",
    content:
      "# Why is markdown cool?\n\n" +
      "* because it lets us do simple formatting **easily** \n" +
      "* _without_ the need for complex CMS data structures \n" +
      "* and you can outsource ~~your~~ work to the content creators! \n\n" +
      "![](https://t3.ftcdn.net/jpg/02/64/34/76/240_F_264347640_SH1AdGYtfcs3lRS5xUqXYoNXayQTdgQw.jpg) > This is a blockquote \n\n" +
      "![We can add images!](http://placehold.it/300x300) \n" +
      "[Or link to places](http://foobar.com) \n",
    preview:
      "For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.",
    date: 1586147180696,
    images: [
      "https://t4.ftcdn.net/jpg/03/09/21/05/240_F_309210544_5DA0lZNd13HUl3dCD7kWFMu1fJ0VaqLW.jpg",
    ],
    user: {
      avatar:
        "https://t3.ftcdn.net/jpg/03/15/66/92/240_F_315669239_tvFWEffY96UtU2xT5uccdSlIJ2s0E9Ux.jpg",
      username: "Mama Pelle",
    },
  },
];
const Feed = ({ style, navigation }) => {
  function viewPost(post) {
    navigation.navigate("Article", {
      post,
    });
  }

  const renderItem = ({ item, index }) => (
    <Post viewPost={viewPost} {...item} />
  );

  return (
    <FlatList
      style={{
        width: "100%",
        ...style,
      }}
      contentContainerStyle={{ paddingBottom: 30 }}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

export default Feed;

const styles = StyleSheet.create({});
