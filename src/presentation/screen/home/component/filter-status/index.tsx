import React, { useContext } from 'react'

import {
  Title,
  FilterWrapper,
  FilterAll,
  FilterOpen,
  FilterFinish,
  Text
} from './styles'

import { Section } from '../../../../styles/global-style'
import { Context } from '../../../../context/context'

export function StatusFilter () {
  const { filter, setFilter } = useContext(Context)
  return (
    <Section>
        <Title>Filtre pelo status do chamado</Title>
        <FilterWrapper>
            <FilterAll
              opacity={filter === 'default' ? 1 : 0.7}
              onPress={() => { setFilter('default') }}
            >
                <Text>Todos</Text>
            </FilterAll>
            <FilterOpen
              opacity={filter === 'open' ? 1 : 0.7}
              onPress={() => { setFilter('open') }}
            >
                <Text>Aberto</Text>
            </FilterOpen>
            <FilterFinish
              opacity={filter === 'close' ? 1 : 0.7}
              onPress={() => { setFilter('close') }}
            >
                <Text>Encerrado</Text>
            </FilterFinish>
        </FilterWrapper>
    </Section>
  )
}
