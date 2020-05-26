import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';


const StackNavigator = createStackNavigator()

export default function AuthStack() {
    return (
        <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="Register" component={Register} />
            <StackNavigator.Screen name="ForgotPassword" component={ForgotPassword} />
        </StackNavigator.Navigator>
    )
}

function AppStack() {
    return (
        <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
            <StackNavigator.Screen name="Home" component={Home} />
            <StackNavigator.Screen name="Profile" component={Profile} />
        </StackNavigator.Navigator>
    )
}

