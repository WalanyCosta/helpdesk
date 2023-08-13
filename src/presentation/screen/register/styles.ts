import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    margin: 32px 24px 88px;
    border-radius: 8px;
`
export const Footer = styled.Pressable`
    flex-direction: row;
    margin-top: 56px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const Paragraph = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 16px;
`
export const Icons = styled(MaterialIcons)`
    font-size: 28px;
    color: ${({ theme }) => theme.COLORS.PRIMARY}
`
