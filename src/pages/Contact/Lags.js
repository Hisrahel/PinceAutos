import React from 'react'
import styled from 'styled-components'
import {GiVibratingSmartphone} from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'

const Lags = () => {
  return (
    <>
      <Section>
        <Container>
        <Hr/>
            <Row>             
             <First>
              <Head>
                U.S.A OFFICE:
              </Head>
            <Tops>
               <Phone>
                <GiVibratingSmartphone className='add'/>
                <Sales>
                  <Sale>Sales Phone</Sale>
                  <Sal> +1 702-984-0145</Sal>
                </Sales>
              </Phone>
              <Adds>
                <GoLocation className='add'/>
                <Sales>
                  <Sale>Address</Sale>
                  <Sal> 12396 S prairie creek road, Olathe Kansas</Sal>
                </Sales>
              </Adds>
            </Tops>
             </First>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Lags

const Section = styled.div`
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Row = styled.div`
  height: 40vh;
  margin-left: 130px;
  margin-top: 70px;
  @media (min-width: 280px) and (max-width: 575px){
    margin-top: 20px;
    margin-left: 0;
  }
`
const Hr = styled.hr`
  width: 80%;
  border: 2px solid #DEA745;
  border-radius: 100%;
`
const First = styled.div``
const Head = styled.div`
  font-size: 35px;
  font-weight: 700;
  padding-bottom: 30px;
  color: #DEA745;
  padding-top: 20px;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 25px;
    text-align: center;
  }
`
const Tops = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-top: 20px;
  .add{
    font-size: 37px;
    color: #DEA745;
  }
  @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    margin-top: 0;
    display: grid;
    .add{
      font-size: 25px;
    }
  }
`
const Phone = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    justify-content: center;
  }
`
const Sales = styled.div`

`
const Sale = styled.div`
  font-size: 20px;
  color: #DEA745;
  font-weight: 600;
  padding-bottom: 10px;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 15px;
    width: 100%;
    text-align: center;
  }
`
const Sal = styled.div`
  letter-spacing: 2px;
  color: #DEA745;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 15px;
    width: 100%;
    text-align: center;
    letter-spacing: 0;
  }
`
const Adds = styled.div`
  display: flex;
  width: 470px;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 280px) and (max-width: 575px){
    width: 80%;
    justify-content: center;
    padding-top: 20px;
    margin: auto;
  }
`