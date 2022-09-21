import React from 'react'
import styled from 'styled-components'
import benz from '../../image/slide_1.jpg'

const Last = () => {
  return (
    <>
      <Section>
        <Container>
            <Row>
                <Col>
                <Body2>
                    Our Luxury Vehicles are simply the best in the market, and it is for classic individuals with a tasteful sense. We offer each of our valued customers the best luxury their money can buy with no stress.

                    All you need to do is, give us your spec, color, and brand including the feature and let us worry about the timely delivery at your doorstep. If you are stylish with an elegant desire in the sphere of luxury Cars, Da Prince Automobil LLC is surely a place to stop-by.
                    </Body2>
                </Col>
                <Col1>
                <Body src={benz}/>
                </Col1>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Last

const Section = styled.div`
    width: 99%;
    height: 100%;
    margin-bottom: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
    border: 5px solid white;
    border-radius: 10px;
    @media (min-width: 280px) and (max-width: 575px){
    padding-top: 0;
  }
    
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
    padding-left: 30px;
    @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    padding-left: 0;
  }
`
const Col1 = styled.div`
    width: 55%;
    @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
  }
`
const Body2 = styled.div`
    padding-top: 20px;
    color: white;
    font-size: 18px;
    color: #DEA745;
    letter-spacing: 1px;
    line-height: 35px;
    @media (min-width: 280px) and (max-width: 575px){
    padding-top: 0px;
    letter-spacing: 0;
    line-height: 25px;
    font-size: 15px;
    text-align: center;
  }
`
const Body = styled.img`
    width: 100%;
    margin-left: 50px;
    border-radius: 10px;
    margin-top: 20px;
    @media (min-width: 280px) and (max-width: 575px){
    margin-left: 0;
  }
`
