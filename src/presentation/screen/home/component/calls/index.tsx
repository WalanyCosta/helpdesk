import React, { useEffect, useState } from 'react'
import {
  SubTitle,
  ListCalls
} from './styles'

import { Call } from '../call'
import { Section } from '../../../../styles/global-style'
import { LoadCalls } from '../../../../../domain/protocols/load-calls'
import { CallModel } from '../../../../../domain/model/calls'

type Props = {
  loadCalls: LoadCalls
  handleSnapPress: () => void
}

export function Calls ({ handleSnapPress, loadCalls }: Props) {
  const [call, setCalls] = useState([] as CallModel[])

  useEffect(() => {
    loadCalls.load()
      .then((data) => { setCalls(data) })
      .catch((error) => { console.log(error.message) })
  }, [])

  return (
    <>
      <Section>
          <SubTitle>Meus Chamados</SubTitle>
          <ListCalls
            keyExtractor={(item) => item.id}
            data={call}
            renderItem={({ item }) => <Call data={item} key={item.id} onPress={handleSnapPress}/>}
          />
      </Section>

    </>
  )
}
