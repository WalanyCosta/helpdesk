import styled from 'styled-components/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

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
    font-size: 28px;
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

/* the filter's styles */

export const Section = styled.View`
    margin-bottom: 32px;
`
export const Title2 = styled.Text`
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
export const FilterAll = styled.View`
    border-radius: 8px 0px 0px 8px;
    padding: 8px 36px;
    background-color: ${({ theme }) => theme.COLORS.TEXT};
`
export const FilterOpen = styled.View`
    padding: 8px 36px;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`
export const FilterFinish = styled.View`
    border-radius: 0px 8px 8px 0px;
    padding: 8px 28px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`
export const FilterText = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`
export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 24px;
    margin-bottom: 18px;
`

/* the call's styles */

export const CallWrapper = styled.View`
`
export const Call = styled.TouchableOpacity`
    border-radius: 1px 8px 8px 1px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-left-width: 8px;
    border-left-style: solid;
    border-left-color: ${({ theme }) => theme.COLORS.PRIMARY};
    padding: 18px 24px;
    margin-bottom: 16px;
`
export const HeaderCall = styled.View`
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TitleCall = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 18px;
`
export const StatusIcon = styled(MaterialIcons)`
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
`

export const TimeWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Time = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const IconTime = styled(MaterialIcons)`
    font-size: 18px;
`
export const Label = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: 12px;
`
export const IconID = styled(MaterialIcons)`
    font-size: 18px;
`
