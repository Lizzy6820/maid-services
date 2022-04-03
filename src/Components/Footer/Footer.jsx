import React from 'react'
import {Facebook,Instagram,Pinterest,Twitter,} from "@mui/icons-material";
import styled from "styled-components";
import logo from '../../assets/main.jpg';
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    background-color: #D3D3D3;
    ${mobile({flexDirection:'column'})}
   
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 50px;
    ${mobile({marginLeft:'30px', padding:'20px 2px'})}
  `;
  

  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    ${mobile({flexDirection:'column'})}
  
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    ${mobile({marginBottom:'5px'})}
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({marginRight:'5px'})}
  
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:'none'})}
    
  `;


const Footer = () => {
  return (
    <Container id="contact">
    <Left>
    <Title>About Us</Title>
    <img src={logo} alt="Home Care Ug" height="30%" width="20%"  />
      <Desc>
       Our mission is to provide professional helpers who will create an environment of cleanliness, organisation and care in your home.
      </Desc>
    </Left>

    <Center>
      <Title>Social</Title>
      <SocialContainer>
        <SocialIcon color= 'd4a437'>
          <Facebook />
        </SocialIcon>
        <SocialIcon color= 'd4a437'>
          <Instagram />
        </SocialIcon>
        <SocialIcon color='d4a437'>
          <Twitter />
        </SocialIcon>
        <SocialIcon color= 'd4a437'>
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Center>

    <Right>
    <Title>Useful Links</Title>
      <List>
        <ListItem>Services</ListItem>
        <ListItem>Quality</ListItem>
        <ListItem>Policy</ListItem>
      </List>
    </Right>

  </Container>
  )
}

export default Footer