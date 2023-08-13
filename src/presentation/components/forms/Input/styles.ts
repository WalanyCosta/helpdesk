import styled from 'styled-components/native'

type Props = {
  valid: string
  theme: any
}

export const Container = styled.View`
  margin-bottom: 24px;
`

const colorBorder = (valid: string, theme: any = '') => {
  if (valid === null) {
    return theme.COLORS.BORDER
  }

  if (valid.length !== 0) {
    return 'red'
  }
  if (valid.length === 0) {
    return 'green'
  }
}

export const InputComponent = styled.TextInput<Props>`
background: ${(props) => props.theme.COLORS.WHITE};
color: ${(props) => props.theme.COLORS.TEXT};
margin-bottom: -16px;
padding: 10px;
border-style: solid;
border-width: 1px;
border: ${(props) => colorBorder(props.valid, props.theme)};
border-radius: 8px;
font-size: 15px;
font-family: ${(props) => props.theme.FONTS.TEXT};
`
export const MessageError = styled.Text`
  color: red;
  font-size: 11px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  margin-left: 2px;
  margin-top: 14px;
  margin-bottom: -18px;
`
