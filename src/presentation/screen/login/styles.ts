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
    margin-bottom: 16px;
    font-size: 15px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 40px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`
