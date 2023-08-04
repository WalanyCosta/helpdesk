import React, { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import theme from './src/presentation/theme'
import { ThemeProvider } from 'styled-components'
import { Routes } from './src/main/routes/route'

SplashScreen.preventAutoHideAsync()

export default function App () {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style='dark' translucent backgroundColor='transparent'/>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
