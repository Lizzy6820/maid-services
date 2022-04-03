import React from 'react'
import styled from 'styled-components'
import professional from '../../src/assets/professional.jpg'
import { Button } from '@mui/material'
import {Link, useLocation} from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
display:flex;
background-color: #edf2f8;
margin-top: 70px;
margin-bottom: 70px;
${mobile({flexDirection:'column'})}
`;

const Info = styled.div`
text-align: left;
justify-content: center;
flex-wrap: wrap;
${mobile({marginTop:'0.05rem'})}
`;

const ImageContainer = styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 70px;
`;

const Desc = styled.div`
margin-top: 5rem;
color: #393c41;
font-weight: 900;
font-size: 38px;
text-align: left;
margin-left: 50px;
${mobile({fontSize:'28px', marginLeft:'10rem'})}
`;

const Desc1 = styled.div`

color: #393c41;
font-size: 20px;
margin-left: 50px;
${mobile({fontSize:'18px',marginLeft:'10rem', marginRight:'10rem'})}

`;

const Image = styled.img`
width:20%
height:30px;
margin-right:3rem;
margin-top:3rem;
object-fit:cover;
border-radius: 5px;
${mobile({marginTop:'0.05rem',marginLeft:'6rem'})}

`;


const Professional = () => {
  const location = useLocation();

  return (
    <>
    <Container  id='quality'>
        <Info>
        <Desc >Quality Home Care</Desc>
        <br />
        <Desc1>We take the pain out of finding professional trustworthy home care attendants who 
            not only bring your home back to life, but provide  tender loving care to each and every member of your household.</Desc1>
            <br />
            <Button variant='contained'size="large"sx={{backgroundColor:'#d4a437', fontWeight:'500',marginLeft:'150px',
            '@media screen and (max-width:900px)': {
              marginLeft: '10rem', marginBottom:'20px'}}}
                component={Link} to='/book'
                >
                    Book Now!
                   </Button>
            </Info>
        <ImageContainer>
            <Image src={professional}/>
        </ImageContainer>

    </Container>
    
    </>
  )
}

export default Professional