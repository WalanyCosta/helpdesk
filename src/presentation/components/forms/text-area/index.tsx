import React from 'react'
import { Container, InputComponent } from './styles'
import { TextInputProps } from 'react-native'

type Props = TextInputProps

export function TextArea ({ ...rest }: Props) {
  return (
    <Container>
        <InputComponent
            multiline
            {...rest}
        />

    </Container>
  )
}
