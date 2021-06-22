import styled from 'styled-components'
import {SettingsOutline} from '@styled-icons/evaicons-outline/SettingsOutline'
import {ArrowIosBackOutline} from '@styled-icons/evaicons-outline/ArrowIosBackOutline'
import {Switch} from '@styled-icons/icomoon/Switch'
import { MoonFill } from '@styled-icons/bootstrap/MoonFill'
import {GridAlt} from '@styled-icons/boxicons-regular/GridAlt'
import {UserCheck} from '@styled-icons/boxicons-solid/UserCheck'
import { UserPlus } from '@styled-icons/boxicons-solid/UserPlus'
import {FileMedia} from '@styled-icons/octicons/FileMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {BellFill} from '@styled-icons/bootstrap/BellFill'


import Toggle from 'react-dark-mode-toggle'

export const ToggleMode = styled(Toggle)`
margin-left: auto;
font-size: 5px;
`

export const Container =styled.div`
display: flex;
justify-content: center;
width: 100wh; 
height: fit-content; 
padding: 50px 300px;
`
export const MobileContainer =styled.div`
box-sizing: border-box;
background: ${({color})=>color};
width: 450px;
height: fit-content;
box-shadow: 5px 5px 12px 6px rgba(0,0,0,0.25);

`


export const IconCon =styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-between; 
width: 100%;
padding: 20px;
`

export const Icon =styled.div``

Icon.Arrow  =styled(ArrowIosBackOutline)`
color: ${({color})=>color};
width: 30px;
height: 30px;
cursor: pointer;
`
Icon.Switch = styled(Switch)`
width: 20px;
height: 20px;
cursor: pointer;
color: ${({color})=>color};
`

export const ImgWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Img = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
padding: 5px;
background-color: #8AC706;
box-shadow: 5px 5px 12px 10px rgba(0,0,0,0.40);

`

export const TitleImg = styled.div`
font-size: 25px;
font-weight: 800;
font-family: SF Pro Display;
margin-top: 10px;
color: ${({color})=>color};
`

export const Desc = styled.div`
font-size: 18px;
font-weight: 700;
font-family: SF Pro Display;
color: ${({color})=>color};
`

export const Item = styled.div`
display: flex;
padding: 15px 30px;
` 

export const Title = styled.div`
font-size: 17px;
font-weight: 700;
font-family: SF Pro Display;
padding-left: 10px;
color: ${({color})=>color};
`

export const Line = styled.div`
width: 85%;
height: 1px;
background-color: whitesmoke;
margin: 10px 30px;
box-sizing: border-box;
/* padding: 20px; */

`

Icon.Dark =styled(MoonFill)`
width:20px;
`

Icon.GridAlt =styled(GridAlt)`
width:25px;
color:#E0C7A3;
`

Icon.User =styled(UserCheck)`
width:25px;
color:#EB6A9A;
`

Icon.UserPlus =styled(UserPlus)`
width:25px;
color:#1FB7D3;
`

Icon.File =styled(FileMedia)`
width:25px;
color:#596EC1;
`

Icon.Comment =styled(CommentDots)`
width:25px;
color:#384FB9;
`

Icon.Setting =styled(SettingsOutline)`
width:25px;
color:#24B238;
`

Icon.Bell =styled(BellFill)`
width:25px;
color:#9689B9;
`