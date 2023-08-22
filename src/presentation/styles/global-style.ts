import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Section = styled.View`
    margin-bottom: 32px;
`

export const Background = styled.View`
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 width: ${Dimensions.get('window').width}px;
 height: ${Dimensions.get('window').height}px;
 background-color: rgba(0,0,0,0.7);
`
export const Title = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
    font-size: 25px;
    margin-bottom: 24px;
    margin-top: 16px;
`
