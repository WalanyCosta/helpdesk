import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    margin: 32px 24px 88px;
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

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
`
