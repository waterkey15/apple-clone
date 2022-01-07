import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OrderedElement from './OrderedElement'
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase';

function Orders() {

    const user = useSelector((state) => state.user.value);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // if(user) {
        //     db
        //     .collection('users')
        //     .doc(user?.uid)
        //     .collection('orders')
        //     .orderBy('created', 'desc')
        //     .onSnapshot(snapshot => (
        //         setOrders(snapshot.docs.map(doc => ({
        //             id: doc.id,
        //             data: doc.data()
        //         })))
        //     ))
        //     console.log(orders)
        // } else {
        //     setOrders([])
        // }
    
      }, [user])



    return (
        <Container>
            <YourOrdersHeader>
                <h2>
                    Your Orders 
                </h2>
            </YourOrdersHeader>
            <ItemContainer>
                {
                    orders.map((order) => (
                        <OrderedElement id={order.id} total={order.data.amount} created={order.data.created} basket={order.data.basket}/>
                    ))
                }
            </ItemContainer>
        </Container>
    )
}


const Container = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #edebe4;
    height: fit-content;

`

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 80%;
    max-width: 800px;

`

const YourOrdersHeader = styled.div`
    width:80%;
    h2{
        font-size: 35px;
        line-height: 1.16;
        font-weight: 600;
        text-align: left;
    }

`



export default Orders
