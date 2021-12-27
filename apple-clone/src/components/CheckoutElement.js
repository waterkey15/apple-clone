import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, calcTax, getFinalTotal } from '../features/basket/basketSlice';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

function CheckoutElement() {


    const basket = useSelector((state) => state.basket.value);
    

    return (
        <TotalPart>
        <TotalPrice>
            <p>Subtotal</p>
                <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p>
                            {value}
                        </p>
                    </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
        </TotalPrice>
        <TotalPrice>
            <p>Shipping</p>
            <p>FREE</p>
        </TotalPrice>
        <TotalPrice>
            <p>Estimated tax</p>
            
            <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p>
                            {value}
                        </p>
                    </>
                    )}
                    decimalScale={2}
                    value={calcTax(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
        </TotalPrice>
        <hr/>
        <FinalTotalPrice>
            <p>Total</p>
            <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p>
                            {value}
                        </p>
                    </>
                    )}
                    decimalScale={2}
                    value={getFinalTotal(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

        </FinalTotalPrice>
    </TotalPart>
    )
}


const TotalPart = styled.div`
    width: 60%;
    padding-left: 20px;
`

const TotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    p{
        font-size: 17px;
        line-height: 1.47;
        font-weight: 400;
        color: #1d1d1f;
        text-align: left;
    }
`

const FinalTotalPrice = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 24px;
        line-height: 1.16;
        font-weight: 600;
        color: #1d1d1f;
        text-align: left;
    }

`

export default CheckoutElement
