import React, { useState, useEffect } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Input } from '../../components/forms/Input'
import { Header } from '../../components/forms/header'
import { Container, Footer, Paragraph, Icons } from './styles'
import { Button } from '../../components/forms/Button'
import { Validation } from '../../protocols/validation'
import { AddAccount } from '../../../domain/protocols/add-account'
import registerLogo from '../../assets/register.json'
import { useNavigation } from '@react-navigation/native'

export type Props = {
  validation: Validation
  addAccount: AddAccount
}

export function Register ({ validation, addAccount }: Props) {
  const navegation = useNavigation()
  const [validName, setValidName] = useState(null)
  const [validEmail, setValidEmail] = useState(null)
  const [validPassword, setValidPassword] = useState(null)
  const [state, setState] = useState({
    name: null,
    email: null,
    password: null,
    loading: false
  })

  useEffect(() => {
    if (state.name !== null) {
      setValidName(validation.validate('name', state.name))
    }
  }, [state.name])

  useEffect(() => {
    if (state.email !== null) {
      setValidEmail(validation.validate('email', state.email))
    }
  }, [state.email])

  useEffect(() => {
    if (state.password !== null) {
      setValidPassword(validation.validate('password', state.password))
    }
  }, [state.password])

  const handleBackToLogin = () => {
    navegation.navigate('login')
  }

  const handleSignUp = async () => {
    if (
      !!validName ||
      !!validEmail ||
      !!validPassword ||
      state.loading
    ) {
      return
    }
    try {
      setState({ ...state, loading: true })
      await addAccount.add({ name: state.name, email: state.email, password: state.password })
    } catch (error) {
      switch (error.name) {
        case 'EmailAlreadyInUseError': setValidEmail(error.message)
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
                messageError={validName}
                onChangeText={(name) => { setState({ ...state, name }) }}
              />

              <Input
                placeholder="E-mail"
                messageError={validEmail}
                onChangeText={(email) => { setState({ ...state, email }) }}
              />

              <Input
                placeholder="Senha"
                messageError={validPassword}
                secureTextEntry
                onChangeText={(password) => { setState({ ...state, password }) }}
              />
            <Button
              text='Cadastrar'
              loading={state.loading}
              onPress={handleSignUp}
            />
          </KeyboardAvoidingView>
          <Footer onPress={handleBackToLogin}>
            <Icons name="arrow-back" size={24} />
            <Paragraph>Eu já tenho uma conta</Paragraph>
          </Footer>
    </Container>
  )
}
