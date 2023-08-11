import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import LoginAnimation from '../../assets/signin.json'
import { Input } from '../../components/forms/Input/index'
import { Button } from '../../components/forms/Button'
import { Authentication } from '../../../domain/protocols/authentication'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Validation } from '../../protocols/validation'
import { Footer } from './components/footer/footer'
import { Header } from '../../components/forms/header'
import { ResetPassword } from '../../../domain/protocols/reset-password'

type Props = {
  authentication: Authentication
  validator: Validation
  resetPassword: ResetPassword
}

export function Login ({ authentication, validator, resetPassword }: Props) {
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
  }, [state.email])

  useEffect(() => {
    if (state.password !== null) {
      setState({ ...state, validPassword: validator.validate('password', state.password) })
    }
  }, [state.password])

  const handleSignIn = async () => {
    if (!!state.validEmail || !!state.validPassword || state.loading) {
      return
    }
    try {
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
        <Header
          source={LoginAnimation}
          legend='Lorem ipsum dolor sit amet. Est'
          title='Entrar'
        />
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

          <Footer
            email={state.email}
            resetPassword={resetPassword}
          />
        </KeyboardAvoidingView>
    </Container>
  )
}
