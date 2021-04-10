import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeRender } from "../redux/actions/renderActions";
import { addToDo } from "../redux/actions/todoAction";
import myDate from "../date";
import { KeyboardAvoidingView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ToDoTextInput from "../components/ToDoTextInput";
import style from "./style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";

function ToDoScreen({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const render = false;
  // const r = useSelector((state) => state.renderReducer);
  function setTextInput(text) {
    setText(text);
  }

  function setTitleInput(title) {
    setTitle(title);
  }

  function saveToDo() {
    if (text.trim() === "" && title.trim() === "") {
      return null;
    } else {
      dispatch(
        addToDo({
          id: Math.floor(Math.random() * 10000),
          text,
          title,
          date: myDate(),
        })
      );
      dispatch(changeRender(render));
      navigation.goBack();
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={style.container}>
      <Header title="Note" navigation={navigation} />
      <ToDoTextInput
        titleValue={title}
        textValue={text}
        setText={setTextInput}
        setTitle={setTitleInput}
      />
      <TouchableOpacity style={style.btn} onPress={() => saveToDo()}>
        <FontAwesome name="save" size={30} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default ToDoScreen;
