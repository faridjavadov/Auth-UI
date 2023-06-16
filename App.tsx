import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider, useSelector } from 'react-redux'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import { store } from './src/redux/store/store'

const App = () => {
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})