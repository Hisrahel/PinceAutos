import React from 'react'
import styled from 'styled-components'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Row>
            <Col1>
              <Head>Navigation</Head>
              <Sub> Plot A, Harry's Homes, Conservation <br /> Courts, Lekki, Lagos</Sub>
              <Sub>12396 S prairie creek road, Olathe <br /> Kansas</Sub>
            </Col1>
            <Col2>
              <Head>Our Service</Head>
              <Sub>Consultation</Sub>
              <Sub>Get Funding</Sub>
              <Sub>Transportation</Sub>
            </Col2>
            <Col3>
              <Head>Contact Us</Head>
              <Sub>+234 808 371 3079</Sub>
              <Sub>+1 702-984-0145</Sub>
              <Social>
              <BsFacebook/>
              <BsInstagram/>
              </Social>
            </Col3>
            <Col4>
              <Head>Subscribe News</Head>
              <Sub>
                <Label> Email:</Label>
                <Input type="email" placeholder="Email Address" required/> <br /> <br />
                <Button type="submit"> Subscribe</Button>
              </Sub>
            </Col4>
          </Row>

          <Div>
              <Subs> © 2020 Da Prince Autmobil | Trademarks and brands are the property of their respective owners. </Subs>
            </Div>
        </Container>
      </Section>
    </>
  )
}

export default Footer

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: #DEA745;
  color: white;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 30px;
`
const Col1 = styled.div``
const Col2 = styled.div``
const Col3 = styled.div``
const Col4 = styled.div``
const Label = styled.label``
const Div = styled.div`
  text-align: center;
  font-size: 20px;
  padding-bottom: 40px;
  padding-top: 20px;
`
const Subs = styled.div``
const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 20px;
  :focus{
    outline: none;
    font-size: 15px;
    color: #DEA745;
  }
  ::placeholder{
    font-size: 10px;
    color: #DEA745;
  }
`
const Button = styled.button`
  color: #DEA745;
  border: none;
  background: white;
  font-size: 15px;
  padding: 5px 10px;
  float: right;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover{
    background: #DEA745;
    color: white;
  }
`
const Head = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 15px;
`
const Sub = styled.form`
  font-size: 15px;
  padding-top: 15px;
`
const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  font-size: 25px;
  cursor: pointer;
`
