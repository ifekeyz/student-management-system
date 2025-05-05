import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import './global.css';
import MainNavigator from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/files/fonts/Nunito/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/files/fonts/Nunito/Nunito-SemiBold.ttf"),
    "Nunito-Black": require("./assets/files/fonts/Nunito/Nunito-Black.ttf"),
    "Nunito-ExtraBold": require("./assets/files/fonts/Nunito/Nunito-ExtraBold.ttf"),
    "Nunito-ExtraLight": require("./assets/files/fonts/Nunito/Nunito-ExtraLight.ttf"),
    "Nunito-Bold": require("./assets/files/fonts/Nunito/Nunito-Bold.ttf"),
    "Nunito-Light": require("./assets/files/fonts/Nunito/Nunito-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
      <MainNavigator/>
  );
}
