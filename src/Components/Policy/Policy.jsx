import { VerifiedRounded } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import policy from '../../assets/policy.png'
import { mobile } from '../../responsive';

const Container = styled.div`
display:flex;
width: 60%,
margin-top: 50px;
margin-bottom: 70px;
${mobile({flexDirection:'column'})}

`;

const Info = styled.div`
text-align: left;
justify-content: center;
flex-wrap: wrap;
width:70%;
`;

const ImageContainer = styled.div`
flex: 1;
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 70px;
${mobile({marginBottom:'1px'})}

`;

const Desc = styled.div`
margin-top: 10px;
color: #393c41;
font-weight: 900;
font-size: 38px;
text-align: center;
margin-left: 5rem;
${mobile({fontSize:'28px', textAlign:'left', marginLeft:'10rem'})}
`;

const Desc1 = styled.div`

color: #393c41;
font-size: 20px;
margin-left: 5rem;
${mobile({fontSize:'18px',marginLeft:'10rem', marginRight:'2rem'})}

`;

const Image = styled.img`
width:40%
height:60px;
margin-right:3rem;
margin-top:5rem;
object-fit:cover;
border-radius: 5px;
${mobile({marginLeft:'1px'})}
`;


const Policy = () => {
  return (
    <>
    <Container  id='policy'>
    <Desc >Policy</Desc>
    <ImageContainer>
            <Image src={policy}/>
        </ImageContainer>
        <Info>
            <br />
            
      <Desc1><VerifiedRounded /> <b> Safety:</b> Our helpers are well vetted, get background checks and address 
      verification reports with the Local Councils.</Desc1>
      <br />
        <Desc1> <VerifiedRounded /> <b>Cost-effective:</b> Pay only a one-time fee.
         No need to pay one month salary, monthly commission or yearly renewal fees. Spend your budget on your new helper rather than on 
         Agency Fees!</Desc1>
           <br />
           <Desc1> <VerifiedRounded /><b>Quick:</b> Directly contact multiple Helpers as soon as the need arises.</Desc1>
            </Info>
       
    </Container>
    
    </>
  )
}

export default Policy