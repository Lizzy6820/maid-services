import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Data from '../Data/Data';
import { mobile } from '../responsive';
import {Link, useLocation} from 'react-router-dom';


const Container = styled.div`
background: url('https://www.maidsapp.com/images/hero_banner.jpg') no-repeat center center fixed;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  height: 26%;
  ${mobile({height:'600px', width:'100%'})}
`;

const Info = styled.div`
height: 300px;
width: 50%;
float: left;
margin: 0;
padding: 0;
position: absolute;
left: 0;
top: 11%;
${mobile({height:'30px', width:'100%',top: '20%'})}
`;

const Infotext =styled.div`
text-align: left;
flex: 1;
margin-left: 50px;
${mobile({marginLeft:'20px'})}
`;

const Desc =styled.h1`
color: #393c41;
font-weight: 600;
margin-top: 100px;
font-size: 45px;
${mobile({fontSize:'30px' })}
`;

const Desc4 = styled.h4`
font-weight: 30;
font-size: 35px;
 color: black;
 ${mobile({fontSize:'20px' })}
`;


const HeaderBlock = () => {
  const location = useLocation();

  return (
    <>
    <Container>
        <Info>
            <Infotext>
            <Desc>Home Care services at your finger tips</Desc>
                <br />
                <Desc4>Request for a professional, qualified home care practioner, Hassle free.</Desc4>
                <br/>
                <Button variant='contained'size="large"sx={{backgroundColor:'#d4a437', fontWeight:'500',marginLeft:'150px',
                '@media screen and (max-width:900px)': {
                  marginLeft: '5px'}}}
                component={Link} to='/book'
                >
                    Book Now!
                   </Button>
              
            </Infotext>
              
                   
            
        </Info>
    </Container>
    </>
  )
}

export default HeaderBlock