import React from 'react'

import { Legend, Title } from './styles'
import { Lottie } from '../../Animations/Lottie'

type Props = {
  legend: string
  title: string
  source: any
}

export function Header ({ source, legend, title }: Props) {
  return (
    <>
       <Lottie source={source} />
       <Legend>{legend}</Legend>
       <Title>{title}</Title>
    </>
  )
}
