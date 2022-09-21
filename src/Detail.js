import React, {useState} from 'react'
import styled from 'styled-components'
import {BsCart3} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import data from './Detail.json'

const Detail = ({product}) => {
  const {id} = useParams()
  const item = data[id-1]

  const [cart, setCart] = useState([]);
  const addToCart = (product) =>  {   
    setCart([...cart, product]);
  };
  return (
    <Container>
      <Wrapper>
        <Wrap>
            <Image>
                <Img src={item.image}/>
            </Image>

            <Navs to="/cart"> 
            <FaShoppingCart className='sc'/> 
            <span>{cart.length}</span>
            </Navs>

            <Text>
                <SubT>
                  <Head>
                    {item.names}
                  </Head>
                  <Sub>Foot Wear for both Gender</Sub>
                  <Star>
                    <AiFillStar className='fill'/>
                    <AiFillStar className='fill'/>
                    <AiFillStar className='fill'/>
                    <AiFillStar className='fill'/>
                    <AiOutlineStar/>
                  </Star>

                  <About><p>
                  From the track to the trail, your path just got easier. These kicks are all about flow, from the nature-inspired aesthetic to the performance-designed cushioning underfoot. Made with 20% recycled materials by weight, they balance plush comfort with streamlined details.
                  </p>
                  </About>
                  <Price><span>PRICE:</span> {item.price}</Price>
                  <Last>
                    <First/>
                    <Button onClick={() => addToCart(product)}> Add to Cart <BsCart3 className='cart'/> </Button>
                  </Last> 
                </SubT>     
            </Text>
        </Wrap>
      </Wrapper>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: linear-gradient(310deg, transparent 70%, red 40%);
    color: white;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    width: 70%;
`
const Text = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const SubT = styled.div``
const Head = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 60px;
    font-weight: 600;
`
const Sub = styled.div`
    text-align: center;
    font-size: 20px;
`
const Star = styled.div`
    display: flex;
    justify-content: center;
    font-size: 23px;
    gap: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    .fill{
        color: red;
    }
`
const About = styled.div`
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    p{
        width: 60%;
    }
`
const Price = styled.div`
    text-align: center;
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 600;
`
const Last = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
`
const First = styled.img`
  border-radius: 15px;
  width: 40px;
  cursor: pointer;
`
const Button = styled.button`
  color: white;
  background: red;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  width: 40%;
  height: 50px;
  letter-spacing: 2px;
  :hover{
    color: red;
    background: white;
  }
  .cart{
    padding-left: 10px;
  }
`
const Navs = styled(NavLink)`
  font-size: 17px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  :hover{
    color: red;
  }
  span{
    padding: 0 3px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
    top: -15px;
    font-size: 12px;
    cursor: pointer;
  }
  position: absolute;
  right: 250px;
  top: 17px;
`

