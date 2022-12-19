import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/application/Home';

const AppStack = createStackNavigator();

export default function UserNavigation(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }} >
                <AppStack.Screen name="home" component={Home}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}