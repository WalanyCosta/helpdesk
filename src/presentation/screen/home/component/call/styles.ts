import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    border-radius: 1px 8px 8px 1px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-left-width: 8px;
    border-left-style: solid;
    border-left-color: ${({ theme }) => theme.COLORS.PRIMARY};
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
export const StatusIcon = styled(MaterialIcons)`
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
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
