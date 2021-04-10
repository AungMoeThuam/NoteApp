import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteToDo, updateToDo } from "../redux/actions/todoAction";
import { changeRender } from "../redux/actions/renderActions";
import { Alert } from "react-native";
import myDate from "../date";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ToDoTextInput from "../components/ToDoTextInput";
import style from "./style";
import Header from "../components/Header";

const ToDoContent = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const render = false;
  const todo = route.params;
  console.log("todo", route.params);
  console.log("todo", todo.id);
  const [newtitle, setNewTitle] = useState(todo.title);
  const [newtext, setNewText] = useState(todo.text);

  const [disable, setDisable] = useState(true);

  function setTextInput(text) {
    setNewText(text);
    setDisable(false);
  }

  function setTitleInput(title) {
    setNewTitle(title);
    setDisable(false);
  }

  function newUpdate() {
    dispatch(
      updateToDo({
        id: todo.id,
        text: newtext,
        title: newtitle,
        date: myDate(),
      })
    );
    dispatch(changeRender(render));
    navigation.goBack();
  }

  function deleteItem() {
    dispatch(deleteToDo(todo.id));
    Alert.alert("deleted");
    dispatch(changeRender());
    navigation.goBack();
  }

  function del() {
    Alert.alert(
      "Are you sure to delete this note?",
      "",
      [
        {
          text: "No",
          onPress: () => null,
        },
        { text: "Yes", onPress: () => deleteItem() },
      ],
      { cancelable: true }
    );
  }

  // useEffect(() => {
  //   newUpdate();
  //   console.log("item changed");
  // }, [newtitle, newtext]);

  return (
    <KeyboardAvoidingView behavior={"padding"} style={style.container}>
      <Header
        title="Content"
        navigation={navigation}
        del={del}
        disable={disable}
        update={newUpdate}
      />
      <ScrollView>
        <ToDoTextInput
          titleValue={newtitle}
          textValue={newtext}
          setText={setTextInput}
          setTitle={setTitleInput}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ToDoContent;
