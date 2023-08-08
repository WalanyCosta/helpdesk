import React, { useEffect, useState } from 'react'
import {
  Container,
  Legend,
  Title,
  Footer
} from './styles'
import LoginAnimation from '../../assets/signin.json'
import { Lottie } from '../../components/Animations/Lottie'
import { Input } from '../../components/forms/Input/index'
import { Button } from '../../components/forms/Button'
import { FooterButton } from '../../components/forms/footer-button'
import { Authentication } from '../../../domain/protocols/authentication'
import { Alert, KeyboardAvoidingView } from 'react-native'
import { Validator } from '../../protocols/validator'
import { useNavigation } from '@react-navigation/native'

type Props = {
  authentication: Authentication
  validator: Validator
}

export function Login ({ authentication, validator }: Props) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, isLoading] = useState(false)
  const [validEmail, isValidEmail] = useState(null)
  const [validPassword, isValidPassword] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
    if (email !== null) {
      isValidEmail(validator.validate('email', email))
    }

    if (password !== null) {
      isValidPassword(validator.validate('password', password))
    }
  }, [email, password])

  const handleSignIn = async () => {
    try {
      if (!!validEmail || !!validPassword) {
        return
      }
      isLoading(true)
      await authentication.auth({ email, password })
    } catch (error) {
      switch (error.name) {
        case 'UserNotFoundError': isValidEmail(error.message)
          break
        case 'InvalidPasswordError': isValidPassword(error.message)
          break
        default: Alert.alert(error.message)
      }
    } finally {
      isLoading(false)
    }
  }

  const handleNavigateToRegisterScreen = (): void => {
    navigation.navigate('register')
  }

  return (
    <Container>
        <Lottie source={LoginAnimation} />
        <Legend>Lorem ipsum dolor sit amet consectetur.</Legend>
        <Title>Entrar</Title>
        <KeyboardAvoidingView behavior='padding'>
          <Input
            placeholder="E-mail"
            messageError={validEmail}
            onChangeText={setEmail}
          />

          <Input
           placeholder="Senha"
           messageError={validPassword}
           secureTextEntry
           onChangeText={setPassword}
          />

          <Button
            text='Entrar'
            loading={loading}
            onPress={handleSignIn}
          />

          <Footer>
            <FooterButton
              iconColor='black'
              iconName='person-add'
              size={24}
              text='Criar conta'
              onPress={handleNavigateToRegisterScreen}
            />

            <FooterButton
              iconColor='black'
              iconName='email'
              size={24}
              text='Esqueci a senha'
            />
          </Footer>
        </KeyboardAvoidingView>
    </Container>
  )
}
