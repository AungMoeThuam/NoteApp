import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import ToDoScreen from "./src/screens/ToDoScreen";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./src/redux/reducers/index";
import thunk from "redux-thunk";
import ToDoContent from "./src/screens/ToDoContent";
import SettingScreen from "./src/screens/Setting";
import AboutScreen from "./src/screens/AboutScreen";
import Drawer from "./src/components/Drawer";

const Stack = createStackNavigator();
const DrawerNavigation = createDrawerNavigator();

function HomePage() {
  return (
    <DrawerNavigation.Navigator drawerContent={Drawer} initialRouteName="home">
      <DrawerNavigation.Screen name="home" component={HomeScreen} />
      <DrawerNavigation.Screen name="setting" component={SettingScreen} />
      <DrawerNavigation.Screen name="about" component={AboutScreen} />
    </DrawerNavigation.Navigator>
  );
}

function Root() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: ({ navigation }) => {
          return null;
        },
      }}
    >
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="todo" component={ToDoScreen} />
      <Stack.Screen name="todocontent" component={ToDoContent} />
      <Stack.Screen name="setting" component={SettingScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
