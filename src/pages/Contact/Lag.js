import React from 'react'
import styled from 'styled-components'
import {GiVibratingSmartphone} from 'react-icons/gi'
import {GoLocation} from 'react-icons/go'

const Lag = () => {
  return (
    <>
      <Section>
        <Container>
        <Hr/>
            <Row>             
             <First>
              <Head>
                NIGERIA OFFICE:
              </Head>
            <Top>
               <Phone>
                <GiVibratingSmartphone className='add'/>
                <Sales>
                  <Sale>Sales Phone</Sale>
                  <Sal> +234 808 371 3079</Sal>
                </Sales>
              </Phone>
              <Add>
                <GoLocation className='add'/>
                <Sales>
                  <Sale>Address</Sale>
                  <Sal> Plot A, Harry's Homes, Conservation Courts, Lekki, Lagos</Sal>
                </Sales>
              </Add>
            </Top>
             </First>
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Lag

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
const Top = styled.div`
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
const Add = styled.div`
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