import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { Button, Text } from './styles'
import { TouchableWithoutFeedbackProps } from 'react-native'

type Props = TouchableWithoutFeedbackProps & {
  iconName: any
  iconColor: string
  text: string
  size: number
}

export function FooterButton ({ iconName, iconColor, size, text, ...rest }: Props) {
  return (
      <Button {...rest} >
          <MaterialIcons name={iconName} size={size} color={iconColor} />
          <Text>{text}</Text>
      </Button>
  )
}
