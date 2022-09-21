import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <>
     <Container>
      <Wrapper>
        <Wrap>
          <Card>
            <Head>CONTACT US</Head>
            <Form>
              <Col1>
                <Label2>Full Name *</Label2> 
                <Input type='text' required/> 
                  <br />
                <Label2>Email*</Label2>
                <Input type='email' required/>
              </Col1>
              <Col2>
                <Label1>Name of Car *</Label1>
                <Input type='text'/>
                  <br />
                <Label1>Phone *</Label1>
                <Input type='number'/>
              </Col2>
              <Col3>
                <Label>Description</Label> <br />
                <Text type='text'/>
              </Col3>  
                  
            </Form>
            <Low>
              <Lows>
                 <Check type="checkbox"/> <Span>Subscribe and Get latest updates and offers by Email</Span>
              </Lows>
               <Button> SUBMIT </Button>    
              </Low> 
          </Card>
        </Wrap>
      </Wrapper>
     </Container>
    </>
  )
}

export default Hero

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(310deg, transparent 70%, #DEA745 20%);
  margin-bottom: 50px;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
const Card = styled.div`
  background: linear-gradient(310deg, #DEA745 77.3%, white 10%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: auto;
  padding: 50px;
  width: 70%;
  height: 50vh;
  border-radius: 5px;
  @media (min-width: 280px) and (max-width: 575px){
    width: 80%;
    padding-left: 20px;
  }
`
const Head = styled.div`
  font-size: 40px;
  font-weight: 800;
  padding-bottom: 25px;
  background: linear-gradient(310deg, white 77%, #DEA745 20%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 30px;
    text-align: center;
  }
`
const Form = styled.form`
  display: flex;
  width: 100%;
  @media (min-width: 280px) and (max-width: 575px){
    display: grid;
  }
`
const Col1 = styled.div`
  flex: 1;
  display: grid;
`
const Col2 = styled.div`
  flex: 1;
  display: grid;
`
const Col3 = styled.div`
  flex: 1;
`
const Label1 = styled.label`
  font-size: 20px;
  padding-bottom: 10px;
  color: white;
  @media (min-width: 280px) and (max-width: 575px){
    color: white;
    font-size: 15px;
  }
`
const Label2 = styled.label`
  font-size: 20px;
  padding-bottom: 10px;
  color: #DEA745;
  @media (min-width: 280px) and (max-width: 575px){
    color: white;
    font-size: 15px;
  }
`
const Input = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #DEA745;
  padding-left: 10px;
  padding-right: 10px;
  :focus{
    font-size: 15px;
    outline: none;
    color: #DEA745;
  }
  @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    height: 30px;
  }
`
const Text = styled.input`
  width: 100%;
  padding-bottom: 150px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid white;
  margin-top: 10px;
  :focus{
    font-size: 15px;
    outline: none;
    color: #DEA745;
  }
`
const Label = styled.label`
  font-size: 20px;
  padding-bottom: 10px;
  color: white;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 15px;
  }
`
const Check = styled.input`
  cursor: pointer;
`
const Low = styled.div`
  margin-top: 25px;
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`
const Lows = styled.div``
const Span = styled.span`
  color: white;
  font-size: 15px;
`
const Button = styled.button`
  font-size: 15px;
  width: 150px;
  height: 40px;
  background: #DEA745;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  :hover{
    border: 2px solid #DEA745;
    color: #DEA745;
    background: white;
    box-shadow: none;
  }
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 13px;
  }
`
