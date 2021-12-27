import React from 'react'
import styled from 'styled-components'
import Subtotal from './Subtotal'
import CheckoutElement from './CheckoutElement'

function Checkout() {
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio illo quia vel, asperiores tempora cupiditate! Nesciunt sequi voluptatum aut!</p>
                    </MailContainer>
                    <PhoneContainer>
                        <PhoneInput placeholder="Phone Number"></PhoneInput>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil nam nesciunt beatae soluta quaerat ipsum a cum distinctio quasi.</p>
                    </PhoneContainer>
                </form>
                <PlaceOrder>
                    <button>
                        Place Order
                    </button>
                    <CheckoutElement/>
                </PlaceOrder>
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
    max-width: 500px;
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

const EmailInput = styled(NameInput)``

const PhoneContainer = styled(MailContainer)`
    
`
const PhoneInput = styled(NameInput)``

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
        background: #0071e3;
        color: #fff;
        min-width: 28px;
        padding: 18px 31px;
        border-radius: 12px;
        border: 0;
        cursor: pointer;
        width: 100%;
        max-width: 500px;
    }

`

export default Checkout