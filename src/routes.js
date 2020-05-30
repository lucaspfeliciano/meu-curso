import React from 'react';

import {createAppContainer} from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Transition } from 'react-native-reanimated';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import { Feather } from '@expo/vector-icons'

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';


const StackNavigator = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

function AuthStack() {
    return (
        <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Register" component={Register} />
            <StackNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
        </StackNavigator.Navigator>
    )
}


 function SignTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#567DF4' }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="grid" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MySwitch = createAnimatedSwitchNavigator(
  {
    SignTab: SignTab,
    AuthStack: AuthStack,
  },
  {
    initialRouteName: 'AuthStack',
    transition: (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={200} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  })

export default createAppContainer(MySwitch);

