import React from 'react'
import { LoginFactory } from '../factory/login-factory/login-factory'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterFactory } from '../factory/register-factory/register-factory'
import { Home } from '../../presentation/screen/home'

const Stack = createNativeStackNavigator()

export function Routes () {
  return (
       <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={LoginFactory} />
        <Stack.Screen name="register" component={RegisterFactory} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
