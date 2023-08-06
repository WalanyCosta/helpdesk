import React from 'react'
import { Container, Text } from './styles'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  text: string
  loading: boolean
}

export function Button ({ loading, text, ...rest }: Props) {
  return (
    <Container {...rest}>
      { loading ? <ActivityIndicator /> : <Text>{text}</Text>}
  </Container>
  )
}
