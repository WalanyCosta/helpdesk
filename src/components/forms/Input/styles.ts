import styled from 'styled-components/native'

export const Container = styled.TextInput`
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.SUBTEXT};
    margin-bottom: 24px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    border-radius: 8px;
    font-size: 15px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
