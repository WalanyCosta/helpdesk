import React, { useEffect, useState } from 'react'
import {
  Container,
  Legend,
  Title,
  Form,
  Footer
} from './styles'
import LoginAnimation from '../../assets/signin.json'
import { Lottie } from '../../components/Animations/Lottie'
import { Input } from '../../components/forms/Input/index'
import { Button } from '../../components/forms/Button'
import { FooterButton } from '../../components/forms/footer-button'
import { Authentication } from '../../../domain/protocols/authentication'
import { Alert } from 'react-native'
import { Validator } from '../../protocols/validator'

type Props = {
  authentication: Authentication
  validator: Validator
}

export function Login ({ authentication, validator }: Props) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, isLoading] = useState(false)
  const [validEmail, isValidEmail] = useState(null)

  useEffect(() => {
    if (email !== null) {
      isValidEmail(validator.validate('email', email))
    }
  }, [email])

  const handleSignIn = async () => {
    try {
      if (validEmail) {
        return
      }
      isLoading(true)
      await authentication.auth({ email, password })
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      isLoading(false)
    }
  }

  return (
    <Container>
        <Lottie source={LoginAnimation} />
        <Legend>Lorem ipsum dolor sit amet consectetur.</Legend>
        <Title>Entrar</Title>
        <Form>
          <Input
            placeholder="E-mail"
            messageError={validEmail}
            onChangeText={setEmail}
          />

          <Input
           placeholder="Senha"
           messageError={''}
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
            />

            <FooterButton
              iconColor='black'
              iconName='email'
              size={24}
              text='Esqueci a senha'
            />
          </Footer>
        </Form>
    </Container>
  )
}
