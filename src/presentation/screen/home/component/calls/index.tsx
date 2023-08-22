import React from 'react'
import {
  SubTitle,
  CallWrapper
} from './styles'

import { Call } from '../call'
import { Section } from '../../../../styles/global-style'

type Props = {
  press: () => void
}

export function Calls ({ press }: Props) {
  return (
    <>
      <Section>
          <SubTitle>Meus Chamados</SubTitle>
          <CallWrapper>
            <Call onPress={press} />
          </CallWrapper>
      </Section>

    </>
  )
}
