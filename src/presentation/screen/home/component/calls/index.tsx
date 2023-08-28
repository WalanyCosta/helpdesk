import React, { useEffect, useState } from 'react'
import {
  Container,
  SubTitle
} from './styles'

import { Call } from '../call'
import { LoadCalls } from '../../../../../domain/protocols/load-calls'
import { CallModel } from '../../../../../domain/model/calls'
import { FlatList } from 'react-native'
import { Loading } from '../../../../components/Animations/loading'

type Props = {
  loadCalls: LoadCalls
  handleSnapPress: () => void
}

export function Calls ({ handleSnapPress, loadCalls }: Props) {
  const [loading, isLoading] = useState(false)
  const [call, setCalls] = useState<CallModel[]>([])

  useEffect(() => {
    isLoading(true)

    loadCalls.load()
      .then((data) => { setCalls(data) })
      .catch((error) => { console.log(error.message) })
      .finally(() => { isLoading(false) })
  }, [])

  return (
    <Container>
        <SubTitle>Meus Chamados</SubTitle>
        {
          loading
            ? <Loading />
            : <FlatList
              keyExtractor={(item) => item.id}
              data={call}
              renderItem={({ item }) => <Call data={item} key={item.id} onPress={handleSnapPress}/>}
              contentContainerStyle={{ paddingBottom: 100 }}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1 }}
            />

        }
    </Container>
  )
}
