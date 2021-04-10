import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Header = ({ title, navigation, del, update, disable }) => {
  function updateOrBack() {
    Alert.alert(
      "Do you want to save the updates?",
      "",
      [
        {
          text: "No",
          onPress: () => navigation.goBack(),
        },
        {
          text: "Yes",
          onPress: () => {
            update();
          },
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View
      style={{
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        height: "8%",
        elevation: 10,
        backgroundColor: "orange",
        flexDirection: "row",
      }}
    >
      {title === "Home" && (
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
      )}

      {title === "Note" && (
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
      )}
      {title === "Content" && (
        <TouchableOpacity
          style={{ paddingRight: 20 }}
          onPress={() => updateOrBack()}
        >
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
      )}

      <Text style={{ fontWeight: "bold", fontSize: 20, width: 100 }}>
        {title}
      </Text>

      {title === "Content" && (
        <>
          <TouchableOpacity
            disabled={disable}
            style={{ marginLeft: 140 }}
            onPress={update}
          >
            <AntDesign name="save" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }} onPress={del}>
            <AntDesign name="delete" size={25} color="black" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;
