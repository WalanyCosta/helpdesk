import React from 'react'
import {
  SubTitle,
  CallWrapper,
  Call,
  HeaderCall,
  TitleCall,
  TimeWrapper,
  Time,
  IconTime,
  Label,
  IconID,
  StatusIcon
} from './styles'

import { Container } from '../../../../styles/global-style'

export function Calls () {
  return (
    <Container>
        <SubTitle>Meus Chamados</SubTitle>
        <CallWrapper>
            <Call>
                <HeaderCall>
                    <TitleCall>Computador Desktop</TitleCall>
                    <StatusIcon name="check-circle"/>
                </HeaderCall>
                <TimeWrapper>
                    <Time>
                        <IconTime name="schedule" />
                        <Label>20/01/22 as 14h</Label>
                    </Time>

                    <Time>
                        <IconID name="my-location"/>
                        <Label>402345</Label>
                    </Time>
                </TimeWrapper>
            </Call>
        </CallWrapper>
    </Container>

  )
}
