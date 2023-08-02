import React, { useState } from 'react'
import {
  Container,
  Legend,
  Title,
  Form,
  Footer
} from './styles'
import LoginAnimation from '../../assets/signin.json'
import { Lottie } from '../../components/Animations/Lottie'
import { Input } from './../../components/forms/Input/index'
import { Button } from '../../components/forms/Button'
import { FooterButton } from '../../components/forms/footer-button'

export function Login () {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleSignIn = (): void => {
    console.log('logou!')
  }

  return (
    <Container>
        <Lottie source={LoginAnimation} />
        <Legend>Lorem ipsum dolor sit amet consectetur.</Legend>
        <Title>Entrar</Title>
        <Form>
          <Input placeholder="E-mail" onChangeText={setEmail}/>
          <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>

          <Button text='Entrar' onPress={handleSignIn}/>

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
