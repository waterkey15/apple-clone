import React, { useState } from 'react'
import styled from 'styled-components'
import LoginIcon from '@mui/icons-material/Login';
import { auth } from '../firebase/firebase';
import { useHistory } from 'react-router-dom';

function SignIn() {
    const history = useHistory();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const register = () => {
        auth.createUserWithEmailAndPassword('trial1@trial1.com', "123456")
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => {
            alert(error.message)
        })
    }



    return (
        <Container>
            <FirstHeader>
                Sign in for faster checkout
            </FirstHeader>
            <FormContainer>
                <SignInForm>
                    <SecondHeader>
                        Sign in to Apple Store
                    </SecondHeader>
                    <EmailInput onChange={(e) => setEmail(e.target.value)} placeholder="Apple ID"/>
                    <PasswordInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                    <SignInButton>
                        <button onClick={signIn}>Sign In <LoginIcon/></button>
                    </SignInButton>
                    <p>Don't have an Apple Clone ID? <a onClick={register}>Create yours now</a> </p>
                </SignInForm>
            </FormContainer>
        </Container>
    )
}


const Container = styled.div`
    padding-top: 50px;
    margin-left: 100px;
    margin-right: 100px;

    @media(max-width: 600px){
        margin-left: 10px;
        margin-right: 10px;
    }
`

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`

const FirstHeader = styled.h1`
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
`

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 100%;
    p{
        font-weight: 400;
        font-size: 14px;
        line-height: 1.42;
        color: #494949;
        a{
            color: #0070c9;
            cursor: pointer;
        }
    }
`

const SecondHeader = styled.h2`
    max-width: 380px;
    word-break: break-word;
    font-size: 24px;
    line-height: 1.16;
    font-weight: 600;
    letter-spacing: 0.009em;
    text-align: center;
`

const EmailInput = styled.input`
    width: 80%;
    border: 1px solid #d6d6d6;
    color: #494949;
    height: 2.6em;
    border-radius: 6px;
    font-size: 17px;
    line-height: 1.29;
    padding-left: 15px;
    margin-top: 20px;
`

const PasswordInput = styled(EmailInput)``

const SignInButton = styled.div`
    margin-top: 20px;
    width: 80%;
    display:flex;
    justify-content:center;
    button{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50px;
        height: 2.6em;
        border-radius: 6px;
        font-size: 17px;
        line-height: 1.29;
        border: none;
        cursor: pointer;
    }
`

export default SignIn
