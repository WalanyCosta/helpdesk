import React from 'react'
import {
  SubTitle,
  CallWrapper
} from './styles'

import { Section } from '../../../../styles/global-style'
import { Call } from '../call'

export function Calls () {
  return (
    <Section>
        <SubTitle>Meus Chamados</SubTitle>
        <CallWrapper>
           <Call />
        </CallWrapper>
    </Section>

  )
}
