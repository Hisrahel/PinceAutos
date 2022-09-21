import React from 'react'
import styled from 'styled-components'
import {TiMessages} from 'react-icons/ti'
import {BsPhone} from 'react-icons/bs'
import {BsWallet} from 'react-icons/bs'
import {BiBusSchool} from 'react-icons/bi'

const Offer = () => {
  return (
    <>
      <Section>
        <Container>
          <Text>What do we offer?</Text>
            <Row>
              <CardWap>
                <Card>
                <TiMessages className='ti'/>
                  <h4>Consultation</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis similique totam mollitia libero veniam.</p>
                </Card>
              </CardWap>
                
              <CardWap>
                  <Card>
                  <BsPhone className='ti'/>
                    <h4>Purchase</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis similique totam mollitia libero veniam.</p>
                  </Card>
                </CardWap>

                <CardWap>
                  <Card>
                  <BsWallet className='ti'/>
                    <h4>Funding</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis similique totam mollitia libero veniam.</p>
                  </Card>
                </CardWap>
                
                <CardWap>
                  <Card>
                  <BiBusSchool className='ti'/>
                    <h4>Transportation</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corporis similique totam mollitia libero veniam.</p>
                  </Card>
              </CardWap>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Offer

const Section = styled.div`
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Row = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  @media (min-width: 280px) and (max-width: 575px){
     display: grid;
     width: 80%;
     margin: auto;
  }
`
const Card = styled.div`
  border: 2px solid #DEA745;
  height: 30vh;
  width: 200px;
  padding: 15px;
  flex: 1;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 50px;
  margin-top: 40px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover{
    color: white;
    background: #DEA745;
    border: none;
    box-shadow: none;
  }
  .ti{
    font-size: 30px;
    padding: 10px;
    background: #dea64557;
    border-radius: 30%;
  }
  h4{
    font-size: 20px;
  }
  p{
    font-size: 12px;
    letter-spacing: 1px;
  }
  @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    margin-bottom: 20px;
    margin-top: 10px;
  }
`
const Text = styled.div`
  color: #DEA745;
  font-size: 40px;
  font-weight: bold;
  padding-left: 75px;
  padding-top: 20px;
  @media (min-width: 280px) and (max-width: 575px){
    padding: 0;
    font-size: 25px;
    text-align: center;
    padding-bottom: 30px;
  }
`
const CardWap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 60px;
  width: 100%;
  align-items: center;
  @media (min-width: 280px) and (max-width: 575px){
    padding: 0;
    text-align: center;
    margin-left: 0px;
  }
`
