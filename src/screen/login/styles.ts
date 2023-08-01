import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    margin: 10px 16px 50px;
    border-radius: 8px;
`

export const Input = styled.TextInput`
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.SUBTEXT};
    margin-bottom: 24px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    border-radius: 8px;
`
export const Legend = styled.Text`
    text-align: center;
    color: ${({ theme }) => theme.COLORS.SUBTEXT};
    margin-bottom: 56px;
`
export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 40px;
    /* font-family: ${({ theme }) => theme.FONTS.TITLE}; */
`
export const Form = styled.View`

`
export const Submit = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    width: 100%;
    height: 56px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
`
export const TitleWhite = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
`

export const FooterButton = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const Span = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.TEXT}
`
