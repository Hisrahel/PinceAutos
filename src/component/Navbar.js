import React from 'react'
import styled from 'styled-components'
import logo from '../image/logo.png'
import {BsSearch} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Wrap>
           <Image src={logo}/>
         <NavItems>
          <Nav to="/">Home</Nav>
          <Nav to="/listing">Listing</Nav>
          <Nav to="/blog">Blog</Nav>
          <Navs to="/reviews">
            <span className='r'>R</span>
            <span className='r'>e</span>
            <span className='r'>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
            <span>s</span>
          </Navs>
          <Navs to="/about">About us</Navs>
          <Navs to="/contact">Contacts</Navs>
          <Cover>
          <Naver to="/"> <BsSearch className='bs'/> </Naver>
          </Cover>
        </NavItems>
          <Button>+234 808 371 3079</Button>
          <Harm>
            <FaBars className='bar'/>
          </Harm>
          </Wrap> 
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
  width: 99%;
  height: fit-content;
  position: absolute;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin: auto;
  @media (min-width: 280px) and (max-width: 575px){
    width: 100%;
    justify-content: space-between;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 90%;
    justify-content: space-between;
  }
`
const Image = styled.img`
  width: 70px;
  cursor: pointer;
  padding: 5px 5px;
  background: white;
  margin: 5px;
  border-radius: 10px;
  @media (min-width: 280px) and (max-width: 575px){
    width: 30px;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    width: 50px;
  }
`
const NavItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 70px;
  @media (min-width: 280px) and (max-width: 575px){
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
`
const Nav = styled(NavLink)`
  font-size: 13px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: white;
  height: 100%;
  :hover{
    border-bottom: 2px solid #fff;
  }
`
const Cover = styled.div`
  display: flex;
  gap: 70px;
  margin-left: 60px;
`
const Button = styled.button`
  margin-right: 50px;
  width: 20%;
  height: 30px;
  border-radius: 7px;
  background: #DEA745;
  color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 280px) and (max-width: 575px){
    display: none;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
`
const Navs = styled(Nav)`
  color: #DEA745;
  .r{
    color: white;
  }
  :hover{
    border-bottom: 2px solid #DEA745;
  }
`
const Naver = styled(Nav)`
  color: #DEA745 !important;
  font-size: 17px;
`
const Harm = styled.div`
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  color: #DEA745;
  @media (min-width: 768px) {
    display: none;
  }
`
