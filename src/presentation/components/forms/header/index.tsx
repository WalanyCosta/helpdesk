import React from 'react'
import { View } from 'react-native'

import { Legend, Title } from './styles'

type Props = {
  legend: string
  title: string
}

export function Header ({ legend, title }: Props) {
  return (
    <View >
       <Legend>{legend}</Legend>
       <Title>{title}</Title>
    </View>
  )
}
