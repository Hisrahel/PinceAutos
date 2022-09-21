import React from 'react'
import styled from 'styled-components'
import car from '../../image/ben.png'

const Hero = () => {
  return (
    <>
     <Container>
      <Wrapper>
        <Wrap>
          <First>
            <Head> BLOG </Head>
          </First>
          <Second>
            <Img src={car} />
          </Second>
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
  background: linear-gradient(310deg, transparent 70.2%, #DEA745 20%);
  @media (min-width: 280px) and (max-width: 575px){
      height: 70vh;
  }
  @media (min-width: 576px) and (max-width: 767px){
      height: 70vh;
  }
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
const First = styled.div`
  width: 40%;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
`
const Second = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Head = styled.div`
    font-size: 70px;
    margin-top: -100px;
    font-weight: 700;
    letter-spacing: 15px;
    background: linear-gradient(310deg, #DEA745 45.5%, white 10%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media (min-width: 280px) and (max-width: 575px){
      margin-top: -170px;
      font-size: 40px;
      padding-left: 10px;
      background: linear-gradient(310deg, #DEA745 42%, white 10%);
      -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  @media (min-width: 576px) and (max-width: 767px) {
      margin-top: -150px;
      /* background: linear-gradient(310deg, #DEA745 42%, white 10%);
      -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
  }
`
const Img = styled.img`
  width: 90%;
  margin: auto;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
  /* @-webkit-keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateX(40px);
    }
  }
  @keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateX(40px);
    }
  } */
`

