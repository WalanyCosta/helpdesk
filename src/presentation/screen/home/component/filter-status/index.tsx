import React from 'react'

import {
  Title,
  FilterWrapper,
  FilterAll,
  FilterOpen,
  FilterFinish,
  Text
} from './styles'

import { Container } from '../../../../styles/global-style'

export function StatusFilter () {
  return (
    <Container>
        <Title>Filtre pelo status do chamado</Title>
        <FilterWrapper>
            <FilterAll>
                <Text>Todos</Text>
            </FilterAll>
            <FilterOpen>
                <Text>Aberto</Text>
            </FilterOpen>
            <FilterFinish>
                <Text>Encerrado</Text>
            </FilterFinish>
        </FilterWrapper>
    </Container>
  )
}
