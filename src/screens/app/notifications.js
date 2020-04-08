import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Center, Header } from "../../components";
import { Avatar, Button } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  {
    _id: "1",
    user: {
      avatar:
        "https://t3.ftcdn.net/jpg/02/22/14/30/240_F_222143070_VooNKN0XgR0JW6Lo8HoP7EkuaFcujLn5.jpg",
      username: "Jane Doe",
    },
    details: {
      event: "follow",
      time: 1586324317014,
    },
  },
  {
    _id: "2",
    user: {
      avatar:
        "https://t4.ftcdn.net/jpg/03/02/94/53/240_F_302945354_dqIiUiITKpard7fBVKDLtffIqnkDbyo4.jpg",
      username: "Barry Allen",
    },
    details: {
      event: "clap",
      time: 1586324317014,
    },
  },
];
const NotificationsScreen = ({ navigation }) => {
  const renderItem = ({ item, index }) => (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#eee",
      }}
    >
      <View style={{ width: "15%" }}>
        <Avatar size="small" source={{ uri: item.user.avatar }} />
      </View>
      <View style={{ width: "60%" }}>
        {item.details.event == "follow" ? (
          <Text>{item.user.username} followed you</Text>
        ) : (
          <Text>{item.user.username} clapped your post</Text>
        )}
      </View>
      <View style={{ width: "20%" }}>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            width: "100%",
          }}
          size="small"
        >
          <Ionicons size={28} color="#35d187" name="ios-add-circle-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <>
      <Header isHome={true} navigation={navigation} name="Notifications" />
      <FlatList
        style={{
          width: "100%",
          backgroundColor: "#Fff",
          marginTop: 5,
        }}
        contentContainerStyle={{ paddingBottom: 40 }}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </>
  );
  return (
    <>
      <Header isHome={true} navigation={navigation} name="Notifications" />
      <Center
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
          marginTop: 5,
        }}
      >
        {notifications.map((item) => (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "#eee",
            }}
          >
            <View style={{ width: "15%" }}>
              <Avatar size="small" source={{ uri: item.user.avatar }} />
            </View>
            <View style={{ width: "60%" }}>
              {item.details.event == "follow" ? (
                <Text>{item.user.username} followed you</Text>
              ) : (
                <Text>
                  {item.user.username} {item.details.event} gave a clap
                </Text>
              )}
            </View>
            <View style={{ width: "20%" }}>
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                  width: "100%",
                }}
                size="small"
              >
                <Ionicons
                  size={28}
                  color="#35d187"
                  name="ios-add-circle-outline"
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Center>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
