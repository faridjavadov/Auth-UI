import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = (navigation:any) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={navigation.navigate('RegisterScreen')}><Text>Go To Register</Text></TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})