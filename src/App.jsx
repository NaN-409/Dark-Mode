import React from 'react'
import { Container,MobileContainer,ToggleMode,Desc,Line,Item,Title,TitleImg,IconCon,Icon,Img,ImgWrapper } from './AppStyle';
import img from './idrok.jpg'
import { useState,useContext} from 'react';
import {ThemeContext} from './context'

function App() {
  const [mode ,setMode] = useState(false);
  const [theme,setTheme] = useContext(ThemeContext);

  const dark = {
    icon:'black',
    title:'black',
    background:'white'
}
  const light = {
    icon:'white',
    title:'white',
    background:'black'
}



  const onChange =()=> {
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
    <div className="App">
      <Container>
        <MobileContainer  color={theme.background}>
          <IconCon>
            <Icon.Arrow color={theme.icon}/>
            <Icon.Switch color={theme.icon}/>
          </IconCon>
          <ImgWrapper>
          <Img src={img} alt="Idrok logo"/>
          <TitleImg color={theme.title}  >
            Idrok 
          </TitleImg>
          <Desc  color={theme.title} >Modern Education</Desc>
          </ImgWrapper>
        {/* ===========  Darkk===== */}
          <Item>
            <Icon.Dark  color={theme.icon}/>
            <Title color={theme.title}>Dark Mode</Title>
            <ToggleMode  
            onChange={onChange}
            checked={mode}
            size={50}/>
                </Item>
          {/* ============Media========== */}
          <Item>
            <Icon.GridAlt/>
            <Title color={theme.title}>Story</Title>
          </Item>
          {/* ============Media========== */}
          <Item>
            <Icon.User/>
            <Title color={theme.title}>Chat Heads</Title>
          </Item>
      
          {/* ============Media========== */}
          <Item>
            <Icon.UserPlus/>
            <Title color={theme.title}>Groups</Title>
          </Item>
          <Line/>
            {/* ============Media========== */}
            <Item>
            <Icon.File/>
            <Title color={theme.title}>Media and Photos</Title>
          </Item>
            {/* ============Media========== */}
            <Item>
            <Icon.Comment/>
            <Title color={theme.title}>Help center</Title>
          </Item>
            {/* ============Media========== */}
            <Item>
            <Icon.Setting/>
            <Title color={theme.title}>Settings and Privacy</Title>
          </Item>
            {/* ============Media========== */}
            <Item>
            <Icon.Bell/>
            <Title color={theme.title}>Notification</Title>
          </Item>
        </MobileContainer>
      </Container>
    </div>
  );
}

export default App;
