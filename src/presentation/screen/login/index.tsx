import React, { useEffect, useState } from 'react'
import {
  Container,
  Legend,
  Title
} from './styles'
import LoginAnimation from '../../assets/signin.json'
import { Lottie } from '../../components/Animations/Lottie'
import { Input } from '../../components/forms/Input/index'
import { Button } from '../../components/forms/Button'
import { Authentication } from '../../../domain/protocols/authentication'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Validator } from '../../protocols/validator'
import { Footer } from './components/footer/footer'

type Props = {
  authentication: Authentication
  validator: Validator
}

export function Login ({ authentication, validator }: Props) {
  const [state, setState] = useState({
    email: null,
    password: null,
    loading: false,
    validEmail: null,
    validPassword: null
  })

  useEffect(() => {
    if (state.email !== null) {
      setState({ ...state, validEmail: validator.validate('email', state.email) })
    }

    if (state.password !== null) {
      setState({ ...state, validPassword: validator.validate('password', state.password) })
    }
  }, [state.email, state.password])

  const handleSignIn = async () => {
    try {
      if (!!state.validEmail || !!state.validPassword || state.loading) {
        return
      }
      setState({ ...state, loading: true })
      await authentication.auth({ email: state.email, password: state.password })
    } catch (error) {
      switch (error.name) {
        case 'UserNotFoundError': setState({ ...state, validEmail: error.message })
          break
        case 'InvalidPasswordError': setState({ ...state, validPassword: error.message })
          break
        default: Alert.alert(error.message)
      }
    } finally {
      setState({ ...state, loading: false })
    }
  }

  return (
    <Container>
        <Lottie source={LoginAnimation} />
        <Legend>Lorem ipsum dolor sit amet consectetur.</Legend>
        <Title>Entrar</Title>
        <KeyboardAvoidingView behavior='padding'>
          <Input
            placeholder="E-mail"
            messageError={state.validEmail}
            onChangeText={(email) => { setState({ ...state, email }) }}
          />

          <Input
           placeholder="Senha"
           messageError={state.validPassword}
           secureTextEntry
           onChangeText={(password) => { setState({ ...state, password }) }}
          />

          <Button
            text='Entrar'
            loading={state.loading}
            onPress={handleSignIn}
          />

          <Footer />

        </KeyboardAvoidingView>
    </Container>
  )
}
