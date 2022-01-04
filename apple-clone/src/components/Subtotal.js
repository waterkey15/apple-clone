import React from 'react'
import styled from 'styled-components'
import SubtotalElement from './SubtotalElement'
import { useSelector } from 'react-redux';
import CheckoutElement from './CheckoutElement';
import { Link } from 'react-router-dom';

function Subtotal() {

    const basket = useSelector((state) => state.basket.value);
    console.log(basket)
    
    return (
        <Container>
            <AppleCardAdv>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910?wid=164&hei=164&fmt=jpeg&qlt=80&.v=1572631318807" alt=""/>
                <p>Pay $83.25/mo.per month at 0% APR for eligible items in your order with Apple Card Monthly Installments.◊ Learn moreLearn more about Apple Card Monthly Installments</p>
            </AppleCardAdv>
            <ReviewAndSubtotal>
                {
                    basket.length <= 0? (
                        <ReviewBagHeader>
                            Your bag is currently empty.
                            <FreeDeliveryText>
                                Add something to proceed to checkout!
                            </FreeDeliveryText>
                        </ReviewBagHeader>
                    ):
                    (
                        <ReviewBagHeader>
                            Review your bag.
                            <FreeDeliveryText>
                                Free delivery and free returns
                            </FreeDeliveryText>
                        </ReviewBagHeader>
                    )
                }
            <CheckoutElement/>
            </ReviewAndSubtotal>
            <ProceedToCheckout isDisabled={!basket.length > 0}>
                <Link to="/checkout">
                    <button disabled={!basket.length > 0}>
                        Proceed to Check Out
                    </button>
                </Link>
            </ProceedToCheckout>
            {
                basket.map((item, index) => (
                    <SubtotalElement key={index} id={item.id}image= {item.img} name={item.name} price={item.price}/>
                ))
            }

        </Container>
    )
}


const Container = styled.div`
    padding: 50px 20px;
`

const AppleCardAdv = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 0.70588rem;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 3.29rem;
    background-color: #f5f5f7;
    text-align: center;
    font-size: 14px;
    line-height: 1.42;
    font-weight: 400;
    @media(max-width: 830px){
        padding-left: 10px;
        padding-right: 0;
    }

    img{
        width: 20px;
        height: auto;
        object-fit: contain;
    }
    p{
        margin-left: 20px;
        @media(max-width: 830px){
            margin-left: 5px;
            font-size: 12px;
            line-height: 1;
            font-weight: 400;
    }
    }
`

const ReviewBagHeader = styled.h1`
    @media(max-width: 830px){
        width: 100%;

    }
    width: 30%;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0;
    color: #1d1d1f;
    text-align: center;
`

const FreeDeliveryText = styled.p`
    padding-top: 13px;
    text-align: center;
    font-size: 17px;
    line-height: 1.4;
    font-weight: 400;
    color: #1d1d1f;
`


const ReviewAndSubtotal = styled.div`
    display: flex;
    align-items: center;
    @media(max-width: 830px){
        flex-direction: column;
    }
`


const ProceedToCheckout = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    button{
        font-size: 17px;
        line-height: 1.47;
        font-weight: 400;
        background: ${props => props.isDisabled? "grey" : "#0071e3"};
        color: #fff;
        min-width: 28px;
        padding: 18px 31px;
        border-radius: 12px;
        border: 0;
        cursor: ${props => props.isDisabled? "default" : "pointer"};
    }
`


export default Subtotal
