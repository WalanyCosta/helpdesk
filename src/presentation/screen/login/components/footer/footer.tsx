import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from './styles'
import { FooterButton } from '../../../../components/forms/footer-button'

export function Footer () {
  const navigation = useNavigation()

  const handleNavigateToRegisterScreen = (): void => {
    navigation.navigate('register')
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
        />
  </Container>
  )
}
