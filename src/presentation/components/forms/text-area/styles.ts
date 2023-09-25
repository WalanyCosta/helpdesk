import { TextInput, TextInputProps } from 'react-native'
import styled from 'styled-components/native'

type Props = TextInputProps & {
  valid: string
  theme: any
}

export const Container = styled.View`
  margin-bottom: 24px;
`

export const InputComponent = styled(TextInput).attrs<Props>(({ theme }) => {
  placeholderTextColor: theme.COLORS.SUBTEXT
}) <Props>`
      width: 100%;
      height: 110px;
      background-color: ${(props) => props.theme.COLORS.WHITE};
      color: ${(props) => props.theme.COLORS.TEXT};
      margin-bottom: 16px;
      padding: 7px 0;
      padding-left: 20px;
      border-style: solid;
      border-width: 1px;
      border: ${({ theme }) => theme.COLORS.BORDER};
      border-radius: 8px;
      font-size: 15px;
      font-family: ${(props) => props.theme.FONTS.TEXT};
`
