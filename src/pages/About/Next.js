import React from 'react'
import styled from 'styled-components'
import car from '../../image/bout.jpeg'

const Next = () => {
  return (
    <>
      <Section>
        <Container>
            <Row>
                <Col>
                    <Img src={car}/>
                </Col>
                <Col1>
                    <Head>
                    DA Prince Autos
                    </Head>
                    <Body>
                    Da Prince Automobil LLC is the home of all kinds of Luxurious cars, in Africa and Abroad. We partner with auto dealership companies in America and Europe.
                    </Body>
                    <Body2>
                    We deal in supply of both brands new and pre-owned (Foreign Used) Luxury Vehicles across the board to suit the need of our valued customers. We are very concerned about the quality of our brand here at Da Prince Automobil LLC because “top-notch” is our watchword in the core of our operations.
                    </Body2>
                    <Body2>
                    We deal in supplies of pool Vehicles to both big limited and cooperate organizations, including government parastatals mostly in Nigeria. The scope of our operations is not limited to only selling of Luxury Vehicles. We supply Luxury Vehicle's spare parts to various Automobile body shops across the nation in Nigeria as a whole.
                    </Body2>
                </Col1>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Next

const Section = styled.div`
    width: 99%;
    height: 100%;
    background: #DEA745;
    margin-bottom: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
    margin-left: 5px;
    border-radius: 10px;
    @media (min-width: 280px) and (max-width: 575px){
    margin-top: -150px;
    width: 97%;
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
  align-items: center;
  margin: auto;
  @media (min-width: 280px) and (max-width: 575px){
    display: grid;
  }
`
const Col = styled.div`
    width: 45%;
@media (min-width: 280px) and (max-width: 575px){
    width: 100%;
  }
`
const Col1 = styled.div`
    width: 55%;
@media (min-width: 280px) and (max-width: 575px){
    width: 100%;
  }
`
const Img = styled.img`
    width: 550px;
    height: 220px;
    margin-top: 70px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    margin-top: 0px;
    height: 120px;
  }
`
const Head = styled.div`
    text-align: center;
    font-size: 40px;
    color: white;
    font-weight: 700;
    @media (min-width: 280px) and (max-width: 575px){
    font-size: 25px;
  }
`
const Body = styled.div`
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: 500;
    padding-top: 10px;
 @media (min-width: 280px) and (max-width: 575px){
    text-align: center;
  }
`
const Body2 = styled.div`
    padding-top: 20px;
    color: white;
    font-size: 15px;
    @media (min-width: 280px) and (max-width: 575px){
    text-align: center;
  }
`
