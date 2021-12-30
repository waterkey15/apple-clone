import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'


function OrderedElement({id, total, created, basket}) {
    
    return (
        <Container>
            <HeaderAndID>
                <h2>Order</h2>
                <p>Order No: {id}</p>
            </HeaderAndID>
            <Date>
                {moment.unix(created).format('MMMM Do YYYY, h:mma')}
            </Date>
            {
                basket.map((item) => (
                    <ItemInformation>
                        <img src={item.img} alt=""/>
                        <h2>{item.name}</h2>
                        <h2>${item.price}</h2>
                    </ItemInformation>
                ))
            }
            <OrderTotal>
            <CurrencyFormat
                    renderText={(value) => (
                    <>
                       <h2>
                           Order Total: {value}
                       </h2>
                       <span>with tax</span>
                    </>
                    )}
                    decimalScale={2}
                    value={total / 100} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
            />
            </OrderTotal>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    border-bottom: 2px solid #edebe4;

`

const HeaderAndID = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 30px;
    align-items: center;
    padding-bottom: 0;
    h2{
        font-size: 25px;
        line-height: 1.16;
        font-weight: 600;
        margin-bottom:10px;

    }
    p{
        margin-bottom:10px;
    }
`

const Date = styled.div`
    padding-right: 10px;
    padding-left: 30px;

`

const ItemInformation = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    img{
        width:25%;
        object-fit: contain;
    }
    h2{
        @media(max-width: 500px){
            font-size: 20px;
        }
        font-size: 25px;
        line-height: 1.16;
        font-weight: 600;
        margin-bottom:10px;

    }

`

const OrderTotal = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    h2{
        @media(max-width: 500px){
            font-size: 20px;
        }
        font-size: 25px;
        line-height: 1.16;
        font-weight: 600;
        margin-bottom:10px;
        margin-bottom: 0;
    }
    span{
        font-size: 9px;
    }

`

export default OrderedElement
