import React from 'react'
import styled from 'styled-components'
import data from './Choose.json'
import { NavLink } from 'react-router-dom'

const Choose = () => {
  return (
    <>
      <Section>
        <Container>
          <Text>Choose your desired car</Text>
            <Row>
            {data.map(({id, image, name, subname, price}) => (
                 <Card key={id}>
                <Img src={image}/>
                  <p className='benz'>{name}</p>
                  <p>{subname}</p>
                  <p className='price'><b>{price}</b></p>
                  <Links to='/contact'>
                   <Butt>Buy Now</Butt>
                  </Links>
                 
                </Card>
                ))} 
            </Row>
            <But>
              <Botton> VIEW MORE </Botton>
            </But> 
        </Container>
      </Section>
    </>
  )
}

export default Choose

const Section = styled.div`
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Row = styled.div`
  width: 99%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-left: 10px;
  @media (min-width: 280px) and (max-width: 575px){
    margin-left: 0;
  }
`
const Card = styled.div`
  border: 2px solid #DEA745;
  width: 300px;
  height: 60vh;
  padding: 15px;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .ti{
    font-size: 30px;
    padding: 10px;
    background: #dea64557;
    border-radius: 30%;
  }
  .benz{
    font-size: 20px;
    font-weight: bold;
  }
  p{
    font-size: 15px;
    letter-spacing: 1px;
  }
  .price{
    font-size: 18px;
  }
  @media (min-width: 280px) and (max-width: 575px){
    height: 100%;
  }
`
const Text = styled.div`
  color: #DEA745;
  font-size: 40px;
  font-weight: bold;
  padding-left: 75px;
  padding-top: 20px;
  padding-bottom: 50px;
  text-transform: capitalize;
  @media (min-width: 280px) and (max-width: 575px){
    text-align: center;
    padding: 0;
    font-size: 25px;
    padding-bottom: 30px;
    padding-top: 40px;
  }
`
const Img = styled.img`
    -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  @-webkit-keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(40px);
    }
  }
  @keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(20px);
    }
  }
`
const Butt = styled.button`
    border: none;
    font-size: 17px;
    padding: 7px 30px;
    border-radius: 7px;
    color: white;
    background: #DEA745;
    cursor: pointer;
    :hover{
        border: 2px solid #DEA745;
        background: white;
        color: #DEA745;
        padding: 5px 30px;
    }
`
const But = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  @media (min-width: 280px) and (max-width: 575px){
    margin-top: 30px;
    margin-bottom: 50px;
  }
`
const Botton = styled.button`
  border-radius: 10px;
  color: #DEA745;
  background: transparent;
  padding: 15px 50px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  border: 2px solid #DEA745;
  cursor: pointer;
  :hover{
    background: #DEA745;
    color: white;
  }
  @media (min-width: 280px) and (max-width: 575px){
    padding: 10px 30px;
    font-size: 13px;
  }
`
const Links = styled(NavLink)``
