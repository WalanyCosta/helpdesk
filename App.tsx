import React, { useCallback, useEffect, useState } from 'react'
import { Login } from './src/screen/login'
import Entypo from '@expo/vector-icons/Entypo'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import theme from './src/theme'
import { ThemeProvider } from 'styled-components'

SplashScreen.preventAutoHideAsync()

export default function App () {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare () {
      try {
        await Font.loadAsync(Entypo.font)
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Login />
        <StatusBar style='dark' translucent backgroundColor='transparent'/>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
