import React from 'react'

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

export function Details () {
  const theme = useTheme()

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
                            20/01/22 ás 14h
                        </Date>
                    </StatusWrapper>
                    <Spacy/>
                    <StatusWrapper>
                        <Icon
                        name="check"
                        color={theme.COLORS.WHITE}
                        background={theme.COLORS.PRIMARY}
                        />
                        <Date color={theme.COLORS.PRIMARY}>
                            20/01/22 ás 14h
                        </Date>
                    </StatusWrapper>
                </IndicatorStatus>

                <DetailWrapper>
                    <Detail>
                        <Span type='label'>Equipamento</Span>
                        <Span type= 'value'>Teclado</Span>
                    </Detail>

                    <Detail>
                        <Span type='label'>Número do Património</Span>
                        <Span type='value'>123456</Span>
                    </Detail>

                    <Detail>
                        <Span type='label'>Descrição</Span>
                        <Span type='value'>Teclado</Span>
                    </Detail>
                </DetailWrapper>
            </Content>
    </>
  )
}
