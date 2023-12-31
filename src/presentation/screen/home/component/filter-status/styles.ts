import styled from 'styled-components/native'

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    text-align: center;
    font-size: 14.5px;
    font-weight: bold;

    margin-bottom: 16px;
`
export const FilterWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

type FilterProps = {
  opacity: number
}

export const FilterAll = styled.TouchableOpacity<FilterProps>`
    border-radius: 8px 0px 0px 8px;
    padding: 8px 36px;
    opacity: ${(props) => props.opacity};
    background-color: ${({ theme }) => theme.COLORS.TEXT};
`
export const FilterOpen = styled.TouchableOpacity<FilterProps>`
    padding: 8px 36px;
    opacity: ${(props) => props.opacity};
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`
export const FilterFinish = styled.TouchableOpacity<FilterProps>`
    border-radius: 0px 8px 8px 0px;
    padding: 8px 28px;
    opacity: ${(props) => props.opacity};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`
export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
