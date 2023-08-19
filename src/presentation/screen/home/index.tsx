import React from 'react'

import {
  Container,
  Header,
  Wrapper,
  Title,
  Paragraph,
  Logout,
  Icon,
  Section,
  Title2,
  FilterWrapper,
  FilterAll,
  FilterOpen,
  FilterFinish,
  FilterText,
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
import { NewCall } from './component/new-call'
import { Validation } from '../../protocols/validation'
import { SaveCall } from '../../../domain/protocols/save-call'

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

        <Section>
            <Title2>Filtre pelo status do chamado</Title2>
            <FilterWrapper>
                <FilterAll>
                    <FilterText>Todos</FilterText>
                </FilterAll>
                <FilterOpen>
                    <FilterText>Aberto</FilterText>
                </FilterOpen>
                <FilterFinish>
                    <FilterText>Encerrado</FilterText>
                </FilterFinish>
            </FilterWrapper>
        </Section>

        <Section>
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
        </Section>

        <NewCall validation={validation} saveCall={saveCall} />
    </Container>
  )
}
