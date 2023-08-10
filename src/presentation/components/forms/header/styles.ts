import styled from 'styled-components/native'

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
