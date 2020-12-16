import React, { useEffect } from 'react'
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from 'react-native-splash-screen'
import welcomeScene from './src/scene/welcomeScene';
import conditionScene from './src/scene/conditionScene';
import loginScene from './src/scene/loginScene';
import forgetPass from './src/scene/forgetPassScene';
import resetpass from './src/scene/resetpassScene';
import otplock from './src/scene/otplockScene';
import confirmiden from './src/scene/confirmidenScene';
import setPincodeScene from './src/scene/setPincodeScene';
import setTouch from './src/scene/setTouch';
import pincodeScene from './src/scene/pincodeScene'



const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={welcomeScene}
          options={{ headerShown: false }} />
        <Stack.Screen name='Condition' component={conditionScene}
          options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={loginScene}
          options={{ headerShown: false }} />
        <Stack.Screen name='forgetPass' component={forgetPass}
          options={{ headerShown: false }} />
        <Stack.Screen name='resetpass' component={resetpass}
          options={{ headerShown: false }} />
        <Stack.Screen name='otplock' component={otplock}
          options={{ headerShown: false }} />
        <Stack.Screen name='confirmiden' component={confirmiden}
          options={{ headerShown: false }} />
        <Stack.Screen name='Setpin' component={setPincodeScene}
          options={{ headerShown: false }} />
        <Stack.Screen name='setTouch' component={setTouch}
          options={{ headerShown: false }} />
        <Stack.Screen name='pincode' component={pincodeScene}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'black'
  },
  text1: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 70
  },
  buttom_eng: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#2a6450',
  }
})


export default App