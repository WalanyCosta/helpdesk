import styled from 'styled-components/native'

export const Container = styled.Pressable`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    width: 100%;
    height: 56px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
`
export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 16px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
