import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    padding: 20,
    paddingTop: 10,
    height: "100%",
    width: "100%",
    fontSize: 16,
    textAlignVertical: "top",
  },
  btn: {
    position: "absolute",
    top: "85%",
    left: "75%",
    width: 60,
    height: 60,
    backgroundColor: "#F0962C",

    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  deleteBtn: {
    width: 50,
    height: "100%",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  todocontentheader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
});

export default style;
