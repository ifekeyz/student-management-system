// App.tsx or App.js (depending on preference)
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import AddStudentScreen from '../screens/AddStudentScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: 'home' | 'add-circle' | 'settings' | undefined;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Add Student') iconName = 'add-circle';
            else if (route.name === 'Settings') iconName = 'settings';
            return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
          },
          headerShown: false,
          tabBarActiveTintColor: '#031E3C',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add Student" component={AddStudentScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}