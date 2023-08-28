import React, { useEffect, useState } from 'react'
import {
  Container,
  SubTitle
} from './styles'

import { Call } from '../call'
import { LoadCalls } from '../../../../../domain/protocols/load-calls'
import { CallModel } from '../../../../../domain/model/calls'
import { FlatList } from 'react-native'

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
    <Container>
        <SubTitle>Meus Chamados</SubTitle>
        <FlatList
          keyExtractor={(item) => item.id}
          data={call}
          renderItem={({ item }) => <Call data={item} key={item.id} onPress={handleSnapPress}/>}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
    </Container>
  )
}
