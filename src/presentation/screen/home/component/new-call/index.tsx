import React, { useRef, useState, useEffect } from 'react'
import { Button } from '../../../../components/forms/Button'
import { Input } from '../../../../components/forms/Input'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { KeyboardAvoidingView, Alert } from 'react-native'
import { TextArea } from '../../../../components/forms/text-area'
import { Validation } from '../../../../protocols/validation'
import { SaveCall } from '../../../../../domain/protocols/save-call'

import { Background, Title } from '../../../../styles/global-style'

export type Props = {
  validation: Validation
  saveCall: SaveCall
}

export function NewCall ({ validation, saveCall }: Props) {
  const bottomSheetRef = useRef<BottomSheetModal>()
  const [deviceType, setDeviceType] = useState<string>(null)
  const [numberDevice, setNumberDevice] = useState<string>(null)
  const [describe, setDescribe] = useState<string>(null)
  const [loading, isloading] = useState(false)

  const [validDeviceType, setValidDeviceType] = useState(null)
  const [validNumberDevice, setValidNumberDevice] = useState(null)

  useEffect(() => {
    if (deviceType !== null) {
      setValidDeviceType(validation.validate('deviceType', deviceType))
    }

    if (numberDevice !== null) {
      setValidNumberDevice(validation.validate('numberDevice', numberDevice))
    }
  }, [deviceType, numberDevice])

  const handleSnapPress = (): void => {
    bottomSheetRef.current?.present()
  }

  const handleSendCall = async () => {
    if (validDeviceType !== '' || validNumberDevice !== '' || loading) {
      return
    }
    try {
      isloading(true)
      await saveCall.save({
        deviceType,
        numberDevice,
        description: describe
      })
      Alert.alert('sucesso', 'Enviado com sucesso!')
    } catch (error) {
      Alert.alert('Erro do servidor', error.message)
    } finally {
      isloading(false)
    }
  }

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
                    loading={loading}
                    onPress={handleSendCall}
                  />
                </BottomSheetView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    </>
  )
}
