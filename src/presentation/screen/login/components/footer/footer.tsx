import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './styles'
import { FooterButton } from '../../../../components/forms/footer-button'
import { Alert } from 'react-native'
import { ResetPassword } from '../../../../../domain/protocols/reset-password'

type Props = {
  email: string
  resetPassword: ResetPassword
}

export function Footer ({ resetPassword, email }: Props) {
  const navigation = useNavigation()
  const [block, isblock] = useState(false)

  const handleNavigateToRegisterScreen = (): void => {
    navigation.navigate('register')
  }

  const handleForgotPassword = async (): Promise<void> => {
    if (block) {
      return
    }
    isblock(true)
    try {
      const response = await resetPassword.reset(email)
      Alert.alert('Redefinir Senha', response)
    } catch (err) {
      Alert.alert(err.message)
    } finally {
      isblock(false)
    }
  }

  return (
    <Container>
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
        onPress={handleForgotPassword}
        />
  </Container>
  )
}
