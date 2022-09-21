import React from 'react'
import styled from 'styled-components'


const Hr = () => {
  
  return (
    <>
      <Section>
        <Container>
            <Row>
            <Hrs />
                <Inputs>
                <Sale>Reviews</Sale>
                <All> All Reviews </All>   
                </Inputs> 
            <Hrs />
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Hr

const Section = styled.div`
    width: 100%;
    height: 100%;
`
const Container = styled.div`
    width: 95%;
    height: 100%;
    margin: auto;
`
const Row = styled.div`
    width: 95%;
    margin: auto;
  @media (min-width: 280px) and (max-width: 575px){
    margin-top: -150px;
  }
`
const Sale = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #DEA745;
    text-transform: uppercase;
`
const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    height: 75px;
    
`
const All = styled.div`
    font-size: 15px;
    color: #DEA745;
    border-bottom: 1px solid #DEA745;
    line-height: 20px;
    cursor: pointer;
`
const Hrs = styled.hr``
