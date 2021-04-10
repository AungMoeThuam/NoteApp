import AsyncStorage from "@react-native-async-storage/async-storage";

function changeIndexOfElement(element, array) {
  let newArray = [...array];
  let eleIndex = newArray.indexOf(element);
  newArray.splice(eleIndex, 1);
  newArray.unshift(element);
  return newArray;
}

export function addToDo(item) {
  return async (dispatch) => {
    try {
      let preToDo = await AsyncStorage.getItem("@item");
      let todo = JSON.parse(preToDo);

      if (todo === null) {
        todo = [];
        todo.unshift(item);

        await AsyncStorage.setItem("@item", JSON.stringify(todo));
        dispatch({
          type: "ADD",
          payload: item,
        });
      } else {
        todo.unshift(item);
        console.log(todo);
        await AsyncStorage.setItem("@item", JSON.stringify(todo));
        dispatch({
          type: "ADD",
          payload: item,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getToDo() {
  return async (dispatch) => {
    try {
      let data = await AsyncStorage.getItem("@item");
      let todo = JSON.parse(data);
      console.log("before", todo);
      if (todo === null) {
        todo = [];
        console.log("after", todo);
        dispatch({
          type: "GET",
          payload: todo,
        });
      } else {
        console.log("re", todo);
        dispatch({
          type: "GET",
          payload: todo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateToDo(todo) {
  return async (dispatch) => {
    try {
      let data = await AsyncStorage.getItem("@item");
      let item = JSON.parse(data);
      // let todoIndex = item.findIndex((obj) => obj.id === todo.id);
      let newArray = item.map((obj) => {
        if (obj.id === todo.id) {
          obj = todo;
        }
        return obj;
      });
      const aung = changeIndexOfElement(todo, newArray);
      console.log("new", aung);
      // item[todoIndex].title = todo.title;
      // item[todoIndex].text = todo.text;
      // item[todoIndex].date = todo.date;
      // item[todoIndex] = todo;
      await AsyncStorage.setItem("@item", JSON.stringify(aung));

      dispatch({
        type: "Update",
        payload: aung,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function deleteToDo(id) {
  return async (dispatch) => {
    try {
      let data = await AsyncStorage.getItem("@item");
      let item = JSON.parse(data);
      let todoIndex = item.findIndex((obj) => obj.id === id);

      item.splice(todoIndex, 1);
      await AsyncStorage.setItem("@item", JSON.stringify(item));
      dispatch({
        type: "Delete",
        payload: item,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
