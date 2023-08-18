import React, { useRef, useState, useEffect } from 'react'
import { Button } from '../../../../components/forms/Button'
import { Input } from '../../../../components/forms/Input'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { KeyboardAvoidingView } from 'react-native'
import { TextArea } from '../../../../components/forms/text-area'
import { Background, Title } from './styles'
import { Validation } from '../../../../protocols/validation'

export type Props = {
  validation: Validation
}

export function NewCall ({ validation }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>()
  const [deviceType, setDeviceType] = useState<string>(null)
  const [numberDevice, setNumberDevice] = useState<string>(null)
  const [describe, setDescribe] = useState<string>(null)

  const [validDeviceType, setValidDeviceType] = useState(null)
  const [validNumberDevice, setValidNumberDevice] = useState(null)

  const handleSnapPress = (): void => {
    bottomSheetRef.current?.present()
  }

  useEffect(() => {
    if (deviceType !== null) {
      setValidDeviceType(deviceType)
    }

    if (numberDevice !== null) {
      setValidNumberDevice(numberDevice)
    }
  }, [deviceType, numberDevice])

  return (
    <>
      <Button
            text='Novo chamado'
            loading={false}
            onPress={handleSnapPress}
        />

        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetRef}
                snapPoints={['70%']}
                style={{ padding: 24 }}
                enablePanDownToClose={true}
                backdropComponent={() => <Background />}
            >
                <BottomSheetView>
                  <Title>Novo Chamado</Title>
                  <KeyboardAvoidingView behavior='padding'>
                    <Input
                      placeholder='Tipo de Equipamento'
                      messageError={validDeviceType}
                      onChangeText={setDeviceType}
                    />

                    <Input
                      placeholder='Número do Patrimonio'
                      messageError={validNumberDevice}
                      onChangeText={setNumberDevice}
                    />

                    <TextArea
                      placeholder='Descrição'
                      onChangeText={setDescribe}
                    />

                  </KeyboardAvoidingView>

                  <Button
                    text='Enviar chamado'
                    loading={false}
                  />
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    </>
  )
}
