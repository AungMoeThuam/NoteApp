import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getToDo, deleteToDo } from "../redux/actions/todoAction";
import { changeRender } from "../redux/actions/renderActions";
import { Alert } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import style from "./style";
import ToDoItem from "../components/ToDoItem";
import { StatusBar } from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  const data = useSelector((state) => state.todoReducer);
  const render = useSelector((state) => state.renderReducer);
  const dispatch = useDispatch();
  const [delItem, setDelItem] = useState([]);

  function deleteItem(itemID) {
    dispatch(deleteToDo(itemID));
    Alert.alert("Deleted!");
    dispatch(changeRender());
  }

  function longPress(id) {
    Alert.alert(
      "Are you sure to delete this note?",
      "",
      [
        {
          text: "No",
          onPress: () => null,
        },
        {
          text: "Yes",
          onPress: () => {
            deleteItem(id);
          },
        },
      ],
      { cancelable: true }
    );
  }

  function press(todo) {
    navigation.push("todocontent", todo);
  }

  useEffect(() => {
    dispatch(getToDo());
    console.log("Home rendered");
  }, [render]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Header title="Home" navigation={navigation} />
      <View style={{ height: "90%" }}>
        {data.length === 0 ? (
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            There is no note yet!
          </Text>
        ) : (
          <FlatList
            bounces={true}
            contentContainerStyle={{ padding: 10 }}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <ToDoItem
                todo={item}
                id={item.id}
                press={press}
                longpress={longPress}
              />
            )}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.push("todo");
        }}
        style={style.btn}
      >
        <AntDesign name="addfile" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
