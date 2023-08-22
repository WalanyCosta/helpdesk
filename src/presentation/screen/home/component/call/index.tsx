import React from 'react'

import {
  Container,
  Header,
  Title,
  TimeWrapper,
  Time,
  IconTime,
  Label,
  IconID,
  StatusIcon
} from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps

export function Call ({ ...rest }: Props) {
  return (
    <Container {...rest}>
        <Header>
            <Title>Computador Desktop</Title>
            <StatusIcon name="check-circle"/>
        </Header>
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
    </Container>
  )
}
