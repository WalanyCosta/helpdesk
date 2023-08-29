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
  const getDateAndHoursFormated = (date: Date): string => {
    const dateTimeFormat = new Intl.DateTimeFormat('en-us', { dateStyle: 'short' })
    const dateFormated = dateTimeFormat.format(date).toString()
    return `${dateFormated.padStart(8, '0')} às ${date.getHours()}h`
  }

  return (
    <Container status={data.status} {...rest}>
        <Header>
            <Title>{data.deviceType}</Title>
            {
              data.status === 'close'
                ? (<StatusIcon name="check-circle" status='close'/>)
                : (<StatusIcon name="hourglass-empty" status='open'/>)
            }
        </Header>
        <TimeWrapper>
            <Time>
                <IconTime name="schedule" />
                <Label>{getDateAndHoursFormated(data.dateStart)}</Label>
            </Time>

            <Time>
                <IconID name="my-location"/>
                <Label>{data.numberDevice}</Label>
            </Time>
        </TimeWrapper>
    </Container>
  )
}
