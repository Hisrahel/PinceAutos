import React from 'react'
import styled from 'styled-components'
import {AiFillCar} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'

const Form = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Wrap>
                <Head> <AiFillCar/> Find Your favourite car <AiOutlineCar/> </Head>
                    <Inputs>
                    <Select>
                        <Option>Maker</Option>
                        <Option>Benz</Option>
                        <Option>Toyota</Option>
                        <Option>Lexus</Option>
                    </Select>
                    <Select>
                        <Option>Model</Option>
                        <Option>300</Option>
                        <Option>718 Boxster</Option>
                        <Option>8 Series</Option>
                        <Option>Accord</Option>
                        <Option>Blazer</Option>
                        <Option>Camaro</Option>
                        <Option>Cayenne</Option>
                        <Option>Cullinan</Option>
                        <Option>Evoque</Option>
                        <Option>Flying Spur</Option>
                        <Option>Levante</Option>
                    </Select>
                    <Select>
                        <Option>Year</Option>
                        <Option>2011</Option>
                        <Option>2012</Option>
                        <Option>2013</Option>
                        <Option>2014</Option>
                        <Option>2015</Option>
                        <Option>2016</Option>
                        <Option>2017</Option>
                        <Option>2018</Option>
                        <Option>2019</Option>
                        <Option>2020</Option>
                        <Option>2021</Option>
                        <Option>2022</Option>
                    </Select>
                </Inputs>
                <Inputs>
                    <Input placeholder='Price Range'/>
                    <Select>
                        <Option>Condition</Option>
                        <Option>New</Option>
                        <Option>Tokunbo</Option>
                        <Option>Faily Used</Option>
                        <Option>Others</Option>
                    </Select>
                    <Select>
                        <Option>Transmission</Option>
                        <Option>Automatic</Option>
                        <Option>Manual</Option>
                        <Option>Both</Option>
                        <Option>Others</Option>
                    </Select>
                    </Inputs>
                <Button> Search </Button>
            </Wrap>
        </Wrapper>
      </Container>
    </>
  )
}

export default Form

const Container = styled.div`
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Wrap = styled.div`
    background: #DEA745;
    width: 90%;
    height: 40vh;
    margin: auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 30px;
    margin-top: -50px;
    @media (min-width: 280px) and (max-width: 575px){
        margin-top: -170px;
        width: 95%;
  }
`
const Inputs = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: space-evenly;
`
const Input = styled.input`
    display: flex;
    align-items: center;
    width: 20%;
    height: 35px;
    border: none;
    border-radius: 10px;
    padding-left: 30px;
    :focus{
        outline: none;
        font-size: 15px;
        color: #DEA745;
    }
    ::placeholder{
        font-size: 14px;
        color: #DEA745;
        letter-spacing: 2px;
    }
    @media (min-width: 280px) and (max-width: 575px){
        padding-left: 10px;
        width: 30%;
  }
`
const Button = styled.button`
    padding: 10px 50px;
    font-size: 15px;
    color: white;
    background: #DEA745;
    border: none;
    text-transform: uppercase;
    border-radius: 10px;
    font-weight: 700;
    letter-spacing: 2px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    margin-left: auto;
    margin-right: 100px;
    cursor: pointer;
    width: 265px;
    :hover{
        color: #DEA745;
        background: white;
    }
    @media (min-width: 280px) and (max-width: 575px){
        margin: auto;
        width: 120px;
        padding: 10px 20px;
     }
    
`
const Head = styled.div`
   padding-left: 95px;
   font-size: 30px;
   font-weight: 700;
   color: white;
   text-transform: capitalize;
   padding-top: 15px;
   @media (min-width: 280px) and (max-width: 575px){
    padding-left: 5px;
    font-size: 20px;
    text-align: center;
  }
`
const Select = styled.select`
    display: flex;
    align-items: center;
    width: 22%;
    height: 35px;
    border: none;
    border-radius: 10px;
    padding-left: 30px;
    font-size: 15px;
    color: #DEA745;
    :focus{
        outline: none;
        font-size: 15px;
        color: #DEA745;
    }
    @media (min-width: 280px) and (max-width: 575px){
        padding-left: 5px;
        width: 30%;
  }
`
const Option = styled.option`
    font-size: 15px !important;
    color: #DEA745 !important;
`


