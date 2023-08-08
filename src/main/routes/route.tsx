import React from 'react'
import { LoginFactory } from '../factory/login-factory/login-factory'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export function Routes () {
  return (
       <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="login" component={LoginFactory} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

function Register () {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Screen Register</Text>
      <Button title='ir ao login' onPress={() => { navigation.navigate('login') }}/>
    </View>
  )
}
