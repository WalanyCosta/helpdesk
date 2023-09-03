import React, { useEffect, useState } from 'react'
import { LoginFactory } from '../factory/login-factory/login-factory'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RegisterFactory } from '../factory/register-factory/register-factory'
import { HomeFactory } from '../factory/home-factory/home-factory'
import { onAuthStateChanged } from 'firebase/auth'
import { ConnectionWithAuth } from '../config/app'

const Stack = createNativeStackNavigator()

export function Routes () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const subscribe = onAuthStateChanged(ConnectionWithAuth, setUser)
    return subscribe
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="home" component={user ? HomeFactory : LoginFactory} />
         <Stack.Screen name="login" component={LoginFactory} />
         <Stack.Screen name="register" component={RegisterFactory} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
