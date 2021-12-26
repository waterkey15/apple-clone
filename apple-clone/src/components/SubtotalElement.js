import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { REMOVE_ITEM } from '../features/basket/basketSlice';



function SubtotalElement({image, name, price, id}) {

    const [isIphone, setIsIpone] = useState(false)
    const dispatch = useDispatch();


    useEffect(()=>{

        if (name[0] == 'i'){
            setIsIpone(true);
        }else{
            setIsIpone(false);
        }
    }, [])

    const removeItem = () =>{
        dispatch(REMOVE_ITEM({
            id: id
        })) 
    }



    return (
        <Container>
                <BodyContainer>
                    <ProductImage iphone = {isIphone}>
                        <img src={image} alt=""/>
                    </ProductImage>
                    <ProductInfo>
                        <ProductName>
                            {name}
                        </ProductName>
                        <ProductSize>
                        <select name="choice">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        </ProductSize>
                        <ProductPrice>
                            <p>${price}</p>
                        </ProductPrice>
                    </ProductInfo>
                </BodyContainer>
                <Remove onClick={removeItem}>
                    <p>Remove</p>
                </Remove>
        </Container>
    )
}

const Container = styled.div`

    border-bottom: 1px solid #d2d2d7;
    padding-bottom: 40px;
    padding-top: 40px;
`


const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    
    @media(max-width: 830px){
        flex-direction: column;
    }

`


const ProductImage = styled.div`
    display: flex;
    width: 300px;
    justify-content: center;


    img{
        width: ${props => props.iphone? `200px` : '300px'};
        object-fit: cover; 
        @media(max-width: 500px){
            width: 203px;
            width: ${props => props.iphone? `120px` : '203px'};
        }   
    }

`

const ProductInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    @media(max-width: 830px){
        flex-direction: column;
    }

`

const ProductName = styled.h2`
    max-width: 50%;
    font-size: 24px;
    line-height: 1.16;
    font-weight: 600;
    @media(max-width: 830px){
        max-width: 100%;
        text-align: center;
    }

`

const ProductSize = styled.div`
    width: 2.35rem;
    select{
        font-size: 24px;
        line-height: 1.1667;
        font-weight:600;
        letter-spacing: 0.9em;
        height: 1.4117;
        margin-bottom: 0;
        padding: 0 0 0 5px;
        border: 0;

    }

`

const ProductPrice = styled.div`
    padding-left: 0.58824rem;
    p{
        text-align: left;
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 600;
        letter-spacing: 0.009em;
    }

`
const Remove = styled.div`
    text-align: center;
    margin-top: -40px;
    @media(max-width: 830px){
        margin-top: -13px;
    }
    p{
        font-size: 17px;
        line-height: 1.47;
        font-weight: 400;
        color: #06c;
        cursor: pointer;
    }
`

export default SubtotalElement
