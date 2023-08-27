import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  status: string
}

const getColorBasedStatus = (status, theme) => {
  return status === 'open' ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY
}

export const Container = styled.TouchableOpacity<Props>`
    border-radius: 1px 8px 8px 1px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-left-width: 8px;
    border-left-style: solid;
    border-left-color: ${(props) => getColorBasedStatus(props.status, props.theme)};
    padding: 18px 24px;
    margin-bottom: 16px;
`

export const Header = styled.View`
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 24px;
    margin-bottom: 18px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 18px;
`
export const StatusIcon = styled(MaterialIcons)<Props>`
    font-size: 24px;
    color: ${(props) => getColorBasedStatus(props.status, props.theme)};
`

export const TimeWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Time = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const IconTime = styled(MaterialIcons)`
    font-size: 18px;
`
export const Label = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 12px;
`
export const IconID = styled(MaterialIcons)`
    font-size: 18px;
`
