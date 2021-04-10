import React from "react";
import { TextInput } from "react-native";
import style from "../screens/style";

const ToDoTextInput = ({
  titleValue,
  textValue,
  setText,
  setTitle,
  newUpdate,
}) => (
  <>
    <TextInput
      placeholder="title"
      style={{
        padding: 20,
        paddingBottom: 0,
        fontWeight: "bold",
        fontSize: 25,
      }}
      value={titleValue}
      onChangeText={(text) => {
        setTitle(text);
        console.log("title changed");
      }}
    />
    <TextInput
      value={textValue}
      placeholder="add task"
      style={style.input}
      multiline={true}
      onChangeText={(text) => {
        setText(text);
      }}
    />
  </>
);

export default ToDoTextInput;
