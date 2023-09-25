import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    margin-top: 46px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
`
export const Wrapper = styled.View`
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 32px;
`
export const Paragraph = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    line-height: 30px;
    font-size: 14.3px;
`
export const Logout = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 8px;
    height: 56px;
`
export const Icon = styled(Ionicons)`
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Section = styled.View`
    margin-bottom: 32px;
`

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 24px;
    margin-bottom: 18px;
`
