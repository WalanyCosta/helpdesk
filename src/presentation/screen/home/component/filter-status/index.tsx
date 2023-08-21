import React from 'react'

import {
  Title,
  FilterWrapper,
  FilterAll,
  FilterOpen,
  FilterFinish,
  Text
} from './styles'

import { Section } from '../../../../styles/global-style'

export function StatusFilter () {
  return (
    <Section>
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
    </Section>
  )
}
