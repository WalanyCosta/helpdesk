import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Content = styled.View`
    margin-top: 40px;
`

export const IndicatorStatus = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const StatusWrapper = styled.View`
    padding: 0 84px;
    align-items: center;
    margin-bottom: 40px;
`

type IconProps = {
  background?: string
}

export const Icon = styled(MaterialIcons)<IconProps>`
    width: 48px;
    height: 48px;
    font-size: 32px;
    background-color: ${(props) => props.background};
    border-radius: 50px;
    text-align: center;
    line-height: 46px;
    margin-bottom: 6px;
`
type DateProps = {
  color: string
}
export const Date = styled.Text<DateProps>`
    width: 80px;
    color: ${(props) => props.color};
    text-align: center;
    font-size: 13px;
    font-family: ${({ theme }) => theme.FONTS.TITLE};
`

export const Spacy = styled.View`
    position: absolute;
    top: 24px;
    right: 79px;
    width: 184px;
    border: 1px dashed ${({ theme }) => theme.COLORS.BORDER};
`

// Details style

export const DetailWrapper = styled.View`

`
export const Detail = styled.View`
    margin-bottom: 16px;
`

type SpacyProps = {
  type: 'value' | 'label'
}

export const Span = styled.Text<SpacyProps>`
    margin-bottom: 4px;
    font-size: 15px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    text-transform: capitalize;
    color: 
        ${({ type, theme }) => type === 'value' ? theme.COLORS.TEXT : theme.COLORS.SUBTEXT};
`
