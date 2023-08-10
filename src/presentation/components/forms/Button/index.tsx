import React from 'react'
import { Container, Text } from './styles'
import { ActivityIndicator, PressableProps } from 'react-native'

type Props = PressableProps & {
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
