import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
    <>
     <Container>
      <Wrapper>
        <Wrap>
        <Error> Error 404 Message:</Error>
        <Head> NIKE SAYS</Head>
        <Sub> Sorry!!, The Page Doesnt Exist</Sub>
        </Wrap>
      </Wrapper>
     </Container>
    </>
  )
}

export default Error

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(310deg, transparent 70%, #DEA745 20%);
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Wrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
`
const Sub = styled.div`
  color: #DAE745;
  text-align: center;
  font-size: 30px;
  padding-bottom: 100px;
`
const Head = styled.div`
  color: #DAE745;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 100px;
  letter-spacing: 10px;
  font-weight: 600;
`

