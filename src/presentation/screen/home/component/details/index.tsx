import React, { useContext } from 'react'

import {
  IndicatorStatus,
  Content,
  StatusWrapper,
  Icon,
  Date,
  DetailWrapper,
  Detail,
  Span,
  Spacy
} from './styles'
import { Title } from '../../../../styles/global-style'
import { useTheme } from 'styled-components/native'
import { Context } from '../../../../context/context'
import { getDateAndHoursFormated } from '../../../../utils/getDateAndHoursFormated'

export function Details () {
  const theme = useTheme()
  const { valueDetails } = useContext(Context)
  return (
    <>
         <Title>Detalhes</Title>
            <Content>
                <IndicatorStatus>
                    <StatusWrapper>
                        <Icon
                            name="hourglass-empty"
                            color={theme.COLORS.WHITE}
                            background={theme.COLORS.SECONDARY}
                        />
                        <Date color={theme.COLORS.SECONDARY}>
                            {getDateAndHoursFormated(valueDetails.dateStart)}
                        </Date>
                    </StatusWrapper>
                    <Spacy/>
                    <StatusWrapper>
                        <Icon
                            name="check"
                            color={valueDetails.status === 'close' ? theme.COLORS.WHITE : theme.COLORS.PRIMARY}
                            background={valueDetails.status === 'close' ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND}
                        />
                        <Date color={theme.COLORS.PRIMARY}>
                            {getDateAndHoursFormated(valueDetails.dateStart)}
                        </Date>
                    </StatusWrapper>
                </IndicatorStatus>

                <DetailWrapper>
                    <Detail>
                        <Span type='label'>Equipamento</Span>
                        <Span type= 'value'>{valueDetails.deviceType}</Span>
                    </Detail>

                    <Detail>
                        <Span type='label'>Número do Património</Span>
                        <Span type='value'>{valueDetails.numberDevice}</Span>
                    </Detail>

                    <Detail>
                        <Span type='label'>Descrição</Span>
                        <Span type='value'>{valueDetails.description}</Span>
                    </Detail>
                </DetailWrapper>
            </Content>
    </>
  )
}
