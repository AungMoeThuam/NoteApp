import React from "react";
import { ListItem } from "react-native-elements";

const ToDoItem = ({ id, title, text, date, press, longpress, todo }) => {
  return (
    <ListItem
      underlayColor="transparent"
      onPress={() => press(todo)}
      onLongPress={() => {
        longpress(id);
      }}
      bottomDivider
      topDivider
      containerStyle={{
        elevation: 3,
        margin: 4,
        backgroundColor: "#F0962C",
        borderRadius: 20,
      }}
    >
      <ListItem.Content>
        {todo.title.trim() === "" ? null : (
          <ListItem.Title
            style={{ fontWeight: "bold", fontSize: 20 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {todo.title}
          </ListItem.Title>
        )}
        {todo.text.trim() === "" ? null : (
          <ListItem.Subtitle
            style={{ marginBottom: 6 }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {todo.text}
          </ListItem.Subtitle>
        )}
        <ListItem.Subtitle>{todo.date}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ToDoItem;
