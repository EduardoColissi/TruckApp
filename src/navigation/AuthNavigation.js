import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/authtentication/Login"
import Signup from '../screens/authtentication/Signup';

const AuthStack = createStackNavigator();

export default function AuthNavigation(){
    return(
        <NavigationContainer>
            <AuthStack.Navigator screenOptions={{headerShown: false}}>
                <AuthStack.Screen name="Login" component={Login}/>
                <AuthStack.Screen name="Signup" component={Signup}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}