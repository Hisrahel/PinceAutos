import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {TbRoad} from 'react-icons/tb'
import {GiGasPump} from 'react-icons/gi'
import {TbEngine} from 'react-icons/tb'
import data from './List.json'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Lists = () => {
    const [search, setSearch] = useState("")
  return (
    <>
      <Section>
        <Container>
        <Inputs>
        <Sale>Vehicle For Sale</Sale>
             <Input onChange={(e)=> setSearch(e.target.value)} placeholder='Car Search' type='text'/> 
             <FaSearch className='fa' />
          </Inputs> 
          <Hr />
            <Row>
            {data.filter((val) => {
            if (search === "") {
              return val;
            }else if (
              val.names.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            }
          }).map(({id, image, names, subname, mileage, fueltype, engine}) => (
                <Card key={id}>
                    <Right> 
                        <Img src={image}/>
                    </Right>
                    <Left>
                        <Name> {names}</Name>
                        <Subname>{subname}</Subname>
                        <Three>
                            <One>
                            <span> <TbRoad className='mil'/> MILEAGE</span> <br />
                            <span> {mileage}</span>
                            </One>
                            <Two>
                            <span> <GiGasPump className='mil'/> FUEL TYPE</span> <br />
                            <span> {fueltype}</span>
                            </Two>
                            <Last>
                            <span><TbEngine className='mil'/> ENGINE</span> <br />
                            <span> {engine}</span>
                            </Last>
                        </Three>
                       <Links to='/contact'>
                        <Button> BUY NOW </Button>
                        </Links>
                    </Left>
                </Card>
                 ))} 
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Lists

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
    width: 80%;
    margin: auto;
    /* @media (min-width: 280px) and (max-width: 575px){
      margin-top: -200px;
  } */
`
const Sale = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #DEA745;
    text-transform: uppercase;
`
const Input = styled.input`
  width: 13%;
  height: 30px;
  border: 2px solid #DEA745;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 45px;
  margin-left: 500px;
  ::placeholder{
    font-size: 12px;
    letter-spacing: 2px;
    color: #DEA745;
  }
  :focus{
    outline: none;
    font-size: 13px;
    color: #DEA745;
  }
`
const Inputs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  .fa{
    position: absolute;
    left: 1220px;
    font-size: 15px;
    color: #DEA745;
    cursor: pointer;
  }
`
const Card = styled.div`
    line-height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #DEA745;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (min-width: 280px) and (max-width: 575px){
      display: grid;
      line-height: 35px;
    }
`
const Right = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    @media (min-width: 280px) and (max-width: 575px){
      width: 60%;
      margin: auto;
    }
`
const Left = styled.div`
    color: white;
    width: 55%;
    @media (min-width: 280px) and (max-width: 575px){
      width: 100%;
    }
`
const Img = styled.img`
  @media (min-width: 280px) and (max-width: 575px){
      width: 100%;
    }
`
const Name = styled.div`
    font-size: 25px;
    font-weight: 500;
    @media (min-width: 280px) and (max-width: 575px){
      font-size: 20px;
      text-align: center;
    }
`
const Subname = styled.div`
    font-size: 20px;
    @media (min-width: 280px) and (max-width: 575px){
      text-align: center;
    }
`
const Three = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    line-height: 20px;
    span{
        font-weight: 700;
    }
    .mil{
        font-size: 20px;
        padding-right: 10px;
    }
    @media (min-width: 280px) and (max-width: 575px){
      text-align: center;
      width: 90%;
      margin: auto;
    }
`
const One = styled.div``
const Two = styled.div``
const Last = styled.div``
const Hr = styled.hr`
  @media (min-width: 280px) and (max-width: 575px){
      margin-top: -250px;
  }  
`
const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: auto;
    border: none;
    margin-top: 20px;
    padding: 10px 50px;
    border-radius: 10px;
    background: white;
    color: #DEA745;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 13px;
    :hover{
        background: #DEA745;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`
const Links = styled(NavLink)`
  text-decoration: none;
`
