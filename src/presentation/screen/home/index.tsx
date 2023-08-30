import React, { useRef, useState } from 'react'
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
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView
} from '@gorhom/bottom-sheet'
import { Background } from '../../styles/global-style'
import { Details } from './component/details'

import { LoadCalls } from './../../../domain/protocols/load-calls'
import { Calls } from './component/calls/index'
import { Context } from '../../context/context'
import { CallModel } from '../../../domain/model/calls'

type Props = {
  validation: Validation
  saveCall: SaveCall
  loadCalls: LoadCalls
}

export function Home ({ validation, saveCall, loadCalls }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>()
  const [valueDetails, setValueDetails] = useState<CallModel>()

  const handleSnapPress = (data: CallModel): void => {
    setValueDetails(data)
    bottomSheetRef.current?.present()
  }

  return (
    <Container>
       <Context.Provider value={{ valueDetails }}>
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

        <Calls
            loadCalls={loadCalls}
            handleSnapPress={handleSnapPress}
          />

        <NewCall
            validation={validation}
            saveCall={saveCall}
        />

          <BottomSheetModalProvider>
              <BottomSheetModal
                  ref={bottomSheetRef}
                  snapPoints={['40%', '85%']}
                  style={{ padding: 24 }}
                  enablePanDownToClose={true}
                  backdropComponent={() => <Background />}
              >
                  <BottomSheetView>
                    <Details />
                  </BottomSheetView>
              </BottomSheetModal>
          </BottomSheetModalProvider>
          </Context.Provider>
    </Container>
  )
}
