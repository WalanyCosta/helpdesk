import styled from 'styled-components/native'

export const Button = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const Text = styled.Text`
    font-size: 15px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
