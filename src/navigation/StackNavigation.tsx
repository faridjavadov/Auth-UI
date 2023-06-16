import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />

            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />

            <Stack.Screen name='ConfirmScreen' component={ConfirmScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})