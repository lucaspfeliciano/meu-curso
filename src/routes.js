import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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


 function LoggedTab() {
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

// ENCONTRAR MELHOR FORMA DE FAZER NAVEGAÇÃO ENTRE AS ROTAS DE USUARIO LOGADO E NÃO LOGADO
// NÃO CONSEGUI NAVEGAR AO COLOCAR AO FAZER LOGIN
// SWITCH NAVIGATOR COM APP CONTAINER (NÃO CONSEGUI FAZER A NAVEGAÇÃO ENTRE AS ROTAS)

export default function Routes() {
  return (
  <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <StackNavigator.Screen name="AuthStack" component={AuthStack} />
    <StackNavigator.Screen name="LoggedTab" component={LoggedTab} />
 </StackNavigator.Navigator>
 )
}


