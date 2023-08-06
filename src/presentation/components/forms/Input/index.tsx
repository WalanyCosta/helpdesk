import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, InputComponent, MessageError } from './styles'

type Props = TextInputProps & {
  messageError: string
}

export function Input ({ messageError, ...rest }: Props) {
  return (
    <Container>
      <InputComponent valid={messageError} {...rest}/>
      {messageError && <MessageError>{messageError}</MessageError>}
    </Container>
  )
}
