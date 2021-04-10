import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";

const SettingScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Header title="Setting" navigation={navigation} />
    <Text>Setting</Text>
  </View>
);

export default SettingScreen;
