import React from 'react'
import styled from 'styled-components'
import {images} from '../../constants'
import { mobile } from '../../responsive';


const Container = styled.div`
margin-top: 2rem;
display:flex;
${mobile({flexDirection:'column'})}

`;

const Desc = styled.h1`
margin-top: 38rem;
color: #393c41;
font-weight: 900;
font-size: 38px;
text-align: center;
${mobile({fontSize: '28px'})}
`;

const ImageContainer = styled.div`
flex:1;
display: flex;
flex-direction: row;
justify-content: center;


`;
const ImageDiv= styled.div`
margin-right: 5rem;
 margin-left: 5rem;
 align-items:center;
 justify-content: flex-start;
 flex-wrap: wrap;
 background-color: #edf2f8;
 border-radius:5px;
 ${mobile({marginBottom:'5px'})}


 
`;


const Img = styled.img`
width:200px;
height:200px;
border-radius: 50%;
margin-top:2rem;
object-fit:cover;
`;

const Text = styled.p`
margin-left: 2rem;
font-size: 25px;
`;


const serviceCard= [
    {name:'Baby-sitting', imgUrl:images.babysit1},
    {name:'Home chores', imgUrl:images.cleaning},
    {name:'Elderly care', imgUrl:images.elderlycare1},

]

const Services = () => {
  return (
    <>
    <div >
 
    <Desc id="services" >Services Offered</Desc> 
      
    <Container>
        {serviceCard.map((service)=>
        <ImageContainer key={service.name}>
          <ImageDiv>
            
            <Img src={service.imgUrl} alt={serviceCard.name} />
         
            <Text>{service.name} </Text>
            </ImageDiv>

        </ImageContainer>
        )}
       
    </Container>
    </div>
    </>
  )
}

export default Services