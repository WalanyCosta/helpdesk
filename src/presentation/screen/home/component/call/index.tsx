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
import { CallModel } from '../../../../../domain/model/calls'

type Props = TouchableOpacityProps & {
  data: CallModel
}

export function Call ({ data, ...rest }: Props) {
  return (
    <Container status={data.status} {...rest}>
        <Header>
            <Title>{data.deviceType}</Title>
            {
              data.status === 'open'
                ? (<StatusIcon name="check-circle" status='open'/>)
                : (<StatusIcon name="hourglass-empty" status='close'/>)
            }
        </Header>
        <TimeWrapper>
            <Time>
                <IconTime name="schedule" />
                <Label>{data.dateStart}</Label>
            </Time>

            <Time>
                <IconID name="my-location"/>
                <Label>{data.numberDevice}</Label>
            </Time>
        </TimeWrapper>
    </Container>
  )
}
