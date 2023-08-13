import React, { useState, useEffect } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Input } from '../../components/forms/Input'
import { Header } from '../../components/forms/header'
import { Container, Footer, Paragraph, Icons } from './styles'
import { Button } from '../../components/forms/Button'
import { Validation } from '../../protocols/validation'
import { AddAccount } from '../../../domain/protocols/add-account'
import registerLogo from '../../assets/register.json'

export type Props = {
  validation: Validation
  addAccount: AddAccount
}

export function Register ({ validation, addAccount }: Props) {
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null,
    loading: false,
    validName: null,
    validEmail: null,
    validPassword: null
  })

  useEffect(() => {
    if (state.name !== null) {
      setState({ ...state, validName: validation.validate('name', state.name) })
    }
  }, [state.name])

  useEffect(() => {
    if (state.email !== null) {
      setState({ ...state, validEmail: validation.validate('email', state.email) })
    }
  }, [state.email])

  useEffect(() => {
    if (state.password !== null) {
      setState({ ...state, validPassword: validation.validate('password', state.password) })
    }
  }, [state.password])

  const handleSignUp = async () => {
    if (
      !state.name ||
      !state.validEmail ||
      !state.validPassword ||
      state.loading
    ) {
      return
    }
    try {
      setState({ ...state, loading: true })
      await addAccount.add({ name: state.name, email: state.email, password: state.password })
    } catch (error) {
      switch (error.name) {
        case 'UserNotFoundError': setState({ ...state, validEmail: error.message })
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
            source={registerLogo}
            legend='Conte conosco, estamos aqui para ajudar'
            title='Cadastrar'
          />
          <KeyboardAvoidingView behavior={undefined}>
              <Input
                placeholder="name"
                messageError={state.validName}
                onChangeText={(name) => { setState({ ...state, name }) }}
              />

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
              text='Cadastrar'
              loading={state.loading}
              onPress={handleSignUp}
            />
          </KeyboardAvoidingView>
          <Footer>
            <Icons name="arrow-back" size={24} />
            <Paragraph>Eu já tenho uma conta</Paragraph>
          </Footer>
    </Container>
  )
}
