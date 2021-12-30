import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Subtotal from './Subtotal'
import CheckoutElement from './CheckoutElement'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import axios from '../axios/axios'
import { getFinalTotal } from '../features/basket/basketSlice'
import { useHistory } from 'react-router-dom'
import { EMPTY_BASKET } from '../features/basket/basketSlice';
import { db } from '../firebase/firebase'


function Checkout() {
    
    const basket = useSelector((state) => state.basket.value);
    const user = useSelector((state) => state.user.value);

    const dispatch = useDispatch();

    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState(true);


    useEffect(()=>{
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/checkout/create?total=${getFinalTotal(basket) * 100}`
            });
            console.log(clientSecret)
            setClientSecret(response.data.clientSecret)
        }


        getClientSecret();
    }, [basket]);

    console.log("secret is ====> ", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
            console.log(paymentIntent)
            db
            .collection('users')
            .doc(user?.uid) //replace with id
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })



            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch(EMPTY_BASKET({}));


            history.replace('/')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error?e.error.message: "");
    }



    return (
        <Container>
            <CheckoutHeader>
                <p>Checkout</p>
            </CheckoutHeader>
            <AddressHeader>
                <h1>
                    Where should we send your order?
                </h1>
            </AddressHeader>
            <FormHeader>
                <h2>
                    Enter your name and address details:
                </h2>
            </FormHeader>
            <FormContainer>
                <form>
                    <NameInput placeholder="First Name"></NameInput>
                    <LastNameInput placeholder=" Last Name"></LastNameInput>
                    <StreetInput placeholder="Street Address"></StreetInput>
                    <AptInput placeholder="Apt, Suite, Building (Optional)"></AptInput>
                    <PhoneHeader>
                        <h2>What's your contact information?</h2>
                    </PhoneHeader>
                    <MailContainer>
                        <EmailInput placeholder="Email Address"></EmailInput>
                        <p>
                        We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.
                        </p>
                    </MailContainer>
                    <PhoneContainer>
                        <PhoneInput placeholder="Phone Number"></PhoneInput>
                        <p>
                        The phone number you enter can’t be changed after you place your order, so please make sure it’s correct.
                        </p>
                    </PhoneContainer>
                    <CardElement onChange={handleChange}/>
                    <PlaceOrder isdisabled={(disabled || processing).toString()}>
                        <button onClick={handleSubmit} disabled={disabled || processing}>
                            {processing? "Processing" : "Place Order"}
                        </button>
                        <CheckoutElement/>
                    </PlaceOrder>
                </form>

            </FormContainer>
        </Container>
    )
}


const Container = styled.div`
    padding: 50px 30px;
`

const CheckoutHeader = styled.div`
    padding-top: 14px;
    p{
        font-size: 24px;
        line-height: 1.167;
        letter-spacing:1.6;
        font-weight: 500;
    }
    border-bottom: 1px solid #d2d2d2;
`

const AddressHeader = styled.div`
    h1{
        font-size: 40px;
        line-height: 1.1;
        font-weight: 600;
        letter-spacing: 0;
        @media(max-width:300px){
            font-size: 20px;
        }
    }
`

const FormHeader = styled.div`
    margin-top: 50px;
    h2{
        font-size: 24px;
        line-height: 1.16;
        font-weight: 600;
        letter-spacing: 0.009em;
        @media(max-width:300px){
            font-size: 16px;
        }
    }
`

const FormContainer = styled.div`
    form{
        display: flex;
        flex-direction: column;
    }

`

const NameInput = styled.input`
    max-width: 700px;
    border-color: #d2d2d7;
    text-overflow: ellipsis;
    background-color: hsla(0, 0%, 100%, .8);
    font-size: 17px;
    line-height: 1.23;
    font-weight: 400;
    height: 3.29rem;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    margin-bottom: 0.82rem;
    text-align: left;
    padding-left: 20px;
    appearance: none;
    @media(max-width:300px){
        font-size: 12px;
        height: 2.29rem;
    }
`

const LastNameInput = styled(NameInput)``
const StreetInput = styled(NameInput)``
const AptInput = styled(NameInput)``

const PhoneHeader = styled(FormHeader)`
    margin-top: 0;
`
const MailContainer = styled.div`
    display: flex;
    max-width: 700px;

    @media(max-width: 900px){
        flex-direction: column;
    }
    p{
        max-width: 350px;
        margin-left: 49px;
        margin-top: 5px;
        font-size: 14px;   
        font-weight: 400;
        text-align: left;
        @media(max-width: 900px){
            margin: 0; 
            margin-bottom: 15px; 
            font-size: 10px;   

        }
    }
`

const EmailInput = styled(NameInput)`
    width: 50%;
`

const PhoneContainer = styled(MailContainer)`
`
const PhoneInput = styled(EmailInput)``

const PlaceOrder = styled.div`
    margin-top: 60px;
    margin-bottom: 20px;
    display: flex;
    @media(max-width: 900px){
        flex-direction: column;
        align-items: flex-start;
    }
    button{
        height: 60px;
        font-size: 17px;
        line-height: 1.47;
        font-weight: 400;
        background: ${props => props.isdisabled == 'true'?'grey':'#0071e3'};
        color: #fff;
        min-width: 28px;
        padding: 18px 31px;
        border-radius: 12px;
        border: 0;
        cursor: ${props => props.isdisabled == 'true'?'default':'pointer'};;
        width: 100%;
        max-width: 500px;
    }

`

const CardContainer = styled.form`
    margin-top: 20px;
    max-width: 700px;
`

const SubmitButton = styled.button`

`

export default Checkout