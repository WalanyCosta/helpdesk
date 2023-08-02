import React from 'react'
import { Container, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  text: string
}

export function Button ({ text, ...rest }: Props) {
  return (
    <Container {...rest}>
    <Text>{text}</Text>
  </Container>
  )
}
