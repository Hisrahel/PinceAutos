import React from 'react'
import styled from 'styled-components'
import {TbBrandAsana} from 'react-icons/tb'
import {SiTrustpilot} from 'react-icons/si'
import {BsTools} from 'react-icons/bs'

const Last = () => {
  return (
    <>
      <Section>
        <Container>
            <Row>

              <CardWap>
                <Card>
                  <Icon>
                    <TbBrandAsana className='ti'/>
                  </Icon>
                  <Note>
                    <span className='h4'>WIDE RANGE OF BRANDS</span> <br/> <br/>
                  <span className='p'>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW.</span>
                  </Note>
                </Card>
              </CardWap>

              <CardWap>
                <Card>
                  <Icon>
                    <SiTrustpilot className='ti'/>
                  </Icon>
                  <Note>
                    <span className='h4'>TRUSTED BY THOUSANDS</span> <br/> <br/>
                  <span className='p'>10 new offers every day. 350 offers on site, trusted by a community of thousands of users</span>
                  </Note>
                </Card>
              </CardWap>

              <CardWap>
                <Card>
                  <Icon>
                    <BsTools className='ti'/>
                  </Icon>
                  <Note>
                    <span className='h4'>SERVICE & MAINTENANCE</span> <br/> <br/>
                  <span className='p'>Our service department maintain your car to stay safe on the road for many more years.</span>
                  </Note>
                </Card>
              </CardWap>
              
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Last

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
  margin-top: 70px;
  margin-left: 40px;
  @media (min-width: 280px) and (max-width: 575px){
    display: grid;
     width: 90%;
     margin: auto;
    
  }
`
const Card = styled.div`
  height: 25vh;
  padding: 15px;
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 50px;
  margin-top: 40px;
  color: white;
  background: #DEA745;
  border: none;
  box-shadow: none;
  :hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .ti{
    font-size: 50px;
    padding: 10px;
  }
  .h4{
    font-size: 20px;
    font-weight: bold;
  }
  .p{
    font-size: 15px;
    letter-spacing: 1px;
  }
  @media (min-width: 280px) and (max-width: 575px){
    margin-top: 0;
    justify-content: center;
  }
`
const Text = styled.div`
  color: #DEA745;
  font-size: 40px;
  font-weight: bold;
  padding-left: 75px;
  padding-top: 20px;
`
const CardWap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 80px;
  width: 30%;
  align-items: center;
  margin: auto;
  @media (min-width: 280px) and (max-width: 575px){
    width: 90%;
    margin-left: 0;
  }
`
const Note = styled.div``
const Icon = styled.div``

