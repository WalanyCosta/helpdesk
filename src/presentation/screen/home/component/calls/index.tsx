import React, { useEffect, useState, useContext } from 'react'
import {
  Container,
  SubTitle
} from './styles'

import { Call } from '../call'
import { LoadCalls } from '../../../../../domain/protocols/load-calls'
import { CallModel } from '../../../../../domain/model/calls'
import { FlatList } from 'react-native'
import { Loading } from '../../../../components/Animations/loading'
import { Context } from '../../../../context/context'

type Props = {
  loadCalls: LoadCalls
  handleSnapPress: (data: CallModel) => void
}

export function Calls ({ handleSnapPress, loadCalls }: Props) {
  const [loading, isLoading] = useState(false)
  const { filter } = useContext(Context)
  const [calls, setCalls] = useState<CallModel[]>([])

  useEffect(() => {
    isLoading(true)

    loadCalls.loadByStatus(filter)
      .then((data) => { setCalls(data) })
      .catch((error) => { console.log(error.message) })
      .finally(() => { isLoading(false) })
  }, [filter])

  return (

      <Container>
          <SubTitle>Meus Chamados</SubTitle>
          {
            loading
              ? <Loading />
              : <FlatList
                  keyExtractor={(item) => item.id}
                  data={calls}
                  renderItem={({ item }) =>
                  <Call
                    data={item}
                    key={item.id}
                    onPress={() => { handleSnapPress(item) }}
                  />
                }
                  contentContainerStyle={{ paddingBottom: 100 }}
                  showsVerticalScrollIndicator={false}
                  style={{ flex: 1 }}
                />

          }
      </Container>

  )
}
