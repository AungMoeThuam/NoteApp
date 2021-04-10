import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";

const AboutScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Header title="About Us" navigation={navigation} />
    <Text>AboutScreen</Text>
  </View>
);

export default AboutScreen;
