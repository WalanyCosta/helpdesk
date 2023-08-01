import React, { useState } from 'react'
import {
  Container,
  Input,
  Legend,
  Title,
  Form,
  Submit,
  TitleWhite,
  Footer,
  FooterButton,
  Span
} from './styles'
import LottieView from 'lottie-react-native'
import LoginAnimation from '../../assets/signin.json'
import { MaterialIcons } from '@expo/vector-icons'

export function Login () {
  const [email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleSignIn = (): void => {
    console.log('logou!')
  }

  return (
    <Container>
         <LottieView
            style={
              {
                width: 220,
                height: 220,
                alignSelf: 'center',
                marginTop: 20
              }
            }
            autoPlay
            loop
            autoSize
            resizeMode="cover"
            source={LoginAnimation}
        />
        <Legend>Lorem ipsum dolor sit amet consectetur.</Legend>
        <Title>Entrar</Title>
        <Form>
          <Input placeholder="E-mail" onChangeText={setEmail}/>
          <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>

          <Submit onPress={handleSignIn}>
            <TitleWhite>Entrar</TitleWhite>
          </Submit>

          <Footer>
            <FooterButton>
                <MaterialIcons name="person-add" size={24} color="black" />
                <Span>criar conta</Span>
            </FooterButton>

            <FooterButton>
                <MaterialIcons name="email" size={24} color="black" />
                <Span>Esqueci a minha senha</Span>
            </FooterButton>
          </Footer>
        </Form>
    </Container>
  )
}
