import React from 'react'
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native'

export function Lottie ({ ...rest }: AnimatedLottieViewProps) {
  return (
    <LottieView
            style={
              {
                width: 180,
                height: 180,
                alignSelf: 'center',
                marginTop: 16
              }
            }
            autoPlay
            loop
            autoSize
            resizeMode="cover"
            {...rest}
        />
  )
}
