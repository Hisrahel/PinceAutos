import React from 'react'
import styled from 'styled-components'
const Bout = () => {
  return (
    <>
      <Section>
        <Container>
            <Row>
                <Col>
                <Body2>
               Our aims is to give our valued customers the value for their money, a certified Luxury Vehicle that's top-notch, either pre-owned (Foreign Used) or Brand new. Our goal here is to serve you better, your happiness is our own testimony and that is what has kept us in the Automobile business for a decade and six years (16YRS). We notice the deeds of the bad heads in the Automobile business.
                    </Body2>
                </Col>
                <Col1>
                    
                    <Body2>
                    How some Dealers rebrand accidented/Flood Vehicles and sell them to their customers as non-accidented (Clean title), and how those vehicles end up catching fire on the highways. Here at Da Prince Automobil LLC, all our customers have wonderful testimonies feedbacks on each of all our sold Vehicles. Their level of the referrer is something to write home about as well.
                    </Body2>
                    
                </Col1>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Bout

const Section = styled.div`
    width: 99%;
    height: 100%;
    margin-bottom: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
    border: 5px solid white;
    border-radius: 10px;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Row = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 280px) and (max-width: 575px){
    display: grid;
  }
`
const Col = styled.div`
    width: 45%;
    @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    margin-top: -50px;
  }
`
const Col1 = styled.div`
    width: 45%;
    @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
  }
`
const Body2 = styled.div`
    padding-top: 20px;
    color: white;
    font-size: 18px;
    color: #DEA745;
    text-align: center;
    line-height: 35px;
    letter-spacing: 2px;
    @media (min-width: 280px) and (max-width: 575px){
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0;
  }
`
