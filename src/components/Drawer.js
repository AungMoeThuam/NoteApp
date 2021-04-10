import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const Drawer = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    <View
      style={{
        width: "100%",
        height: "15%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Image
        style={{ width: 80, height: 80 }}
        source={require("../../assets/icon.png")}
      />
      <Text style={{ width: 100, fontSize: 30, fontWeight: "900" }}>
        MY NOTE
      </Text>
    </View>

    <View
      style={{
        height: "15%",
        width: "100%",
        justifyContent: "space-around",
        // backgroundColor: "yellow",
        paddingLeft: 10,
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 20,
        }}
        onPress={() => {
          navigation.push("about");
        }}
      >
        <AntDesign name="book" style={{ paddingRight: 10 }} size={25} />
        <Text style={{ fontSize: 16, fontWeight: "bold", width: 100 }}>
          About us
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 20,
        }}
      >
        <AntDesign name="setting" style={{ paddingRight: 10 }} size={25} />
        <Text style={{ fontSize: 16, fontWeight: "bold", width: 100 }}>
          Setting
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Drawer;
