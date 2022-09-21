import React from 'react'
import styled from 'styled-components'
import {ImStarFull} from 'react-icons/im'
import {ImStarHalf} from 'react-icons/im'
import {ImStarEmpty} from 'react-icons/im'
import data from './Main.json'

const Main = () => {
  return (
    <>
      <Section>
        <Container>
            <Row>
            {data.map(({id, names, image, Rans, Rate}) => (
                <Card key={id}>
                    <Name>{names}</Name>
                    <Img src={image}/>
                    <Bottom>
                        <Ran> {Rans} </Ran>
                        <Stars>
                            <Star>
                                <ImStarFull/>
                                <ImStarFull/>
                                <ImStarFull/>
                                <ImStarHalf/>
                                <ImStarEmpty/>
                            </Star>
                            <Num> {Rate} </Num>
                        </Stars>
                    </Bottom>
                </Card>
                ))}
            </Row>
        </Container>
      </Section>
    </>
  )
}

export default Main

const Section = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Row = styled.div`
  width: 99%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-left: 10px;
`
const Card = styled.div`
    color: #DEA745;
    width: 300px;
    height: 100%;
    padding: 15px;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const Name = styled.div`
    text-align: center;
    font-size: 15px;
    font-weight: 700;
`
const Img = styled.img``
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
`
const Ran = styled.div`
    font-size: 14px;
`
const Star = styled.div`
    font-size: 15px;
`
const Stars = styled.div``
const Num = styled.div``
