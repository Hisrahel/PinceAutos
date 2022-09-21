import React from 'react'
import styled from 'styled-components'
import car from '../../image/car.png'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <>
     <Container>
      <Wrapper>
        <Wrap>
          <First>
            <Top> Top-notch Luxury cars all in one search</Top>
            <Bottom> We bring you listing of new and used cars from your favourite brand</Bottom>
            <Butt>

              <Links to='/listing'>
               <Bot> Explore Cars</Bot>
              </Links>
              
              <Lin to='/about'>
                <Bot>Learn More</Bot>
              </Lin>
            </Butt>
          </First>
          <Second>
             <Card>
                <Img src={car} />
             </Card>
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
      height: 80vh;
  }
  @media (min-width: 576px) and (max-width: 767px){
      height: 80vh;
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
  flex: 1;
  text-align: center;
  @media (min-width: 280px) and (max-width: 575px){
    margin-top: -150px;
  }
`
const Second = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (min-width: 280px) and (max-width: 575px){
    display: none;
  }
`
const Top = styled.div`
  font-size: 70px;
  font-weight: 700;
  line-height: 80px;
  text-transform: capitalize;
  background: linear-gradient(310deg, #DEA745 52%, white 20%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 32px;
    line-height: 40px;
    background: linear-gradient(310deg, #DEA745 61%, white 20%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  }
  @media (min-width: 576px) and (max-width: 767px){
    font-size: 30px;
    line-height: 0px;
  }
`
const Bottom = styled.div`
  font-size: 17px;
  padding-top: 40px;
  padding-bottom: 30px;
  text-transform: capitalize;
  font-weight: 600;
  background: linear-gradient(310deg, #DEA745 73%, white 20%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  @media (min-width: 280px) and (max-width: 575px){
    font-size: 15px;
    background: linear-gradient(310deg, #DEA745 77%, white 20%);
    padding-top: 20px;
    padding-bottom: 10px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`
const Butt = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 70px;
  justify-content: center;
  @media (min-width: 280px) and (max-width: 575px){
    gap: 50px;
  }
`
const Bot = styled.button`
  border: none;
  background: #DEA745;
  color: white;
  padding: 12px 30px;
  font-size: 15px;
  border-radius: 10px;
  /* background: linear-gradient(310deg, #DEA745 83%, transparent 20%); */
  font-weight: 600;
  cursor: pointer;
  :hover{
    background: white;
    color: #DEA745;
  }
  @media (min-width: 280px) and (max-width: 575px){
    padding: 10px 28px;
  }
`
// const Bot1 = styled.button`
//   border: none;
//   background: #DEA745;
//   color: white;
//   padding: 12px 30px;
//   font-size: 15px;
//   border-radius: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   :hover{
//     background: white;
//     color: #DEA745;
//   }
// `
const Card = styled.div`
  width: 70%;
  height: 60vh;
  background: #DEA745;
  border-radius: 25px;
  position: relative;
  text-decoration: none;
`
const Img = styled.img`
  width: 500px;
  margin: auto;
  padding-top: 100px;
  padding-left: 80px;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
  /* @-webkit-keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(40px);
    }
  }
  @keyframes mover{
    0%{
      transform: translateY(0);
    }
    100%{
      transform: translateY(40px);
    }
  } */
`
const Lin = styled(NavLink)``
const Links = styled(NavLink)``

