import React from 'react'

import {
  Container,
  Header,
  Wrapper,
  Title,
  Paragraph,
  Logout,
  Icon
} from './styles'
import { NewCall } from './component/new-call'
import { Validation } from '../../protocols/validation'
import { SaveCall } from '../../../domain/protocols/save-call'
import { StatusFilter } from './component/filter-status'
import { Calls } from './component/calls'

type Props = {
  validation: Validation
  saveCall: SaveCall
}

export function Home ({ validation, saveCall }: Props) {
  return (
    <Container>
        <Header>
            <Wrapper>
                <Title>Olá, Delcio</Title>
                <Paragraph>Conte Conosco, estamos aqui para ajudar</Paragraph>
            </Wrapper>
            <Logout>
                <Icon name="exit-outline"/>
            </Logout>
        </Header>

       <StatusFilter />

       <Calls />

        <NewCall
            validation={validation}
            saveCall={saveCall}
        />
    </Container>
  )
}
