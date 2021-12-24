import React from 'react'
import  styled  from 'styled-components'

function PhoneModel({name, desc, bgColor, url, headerColor, descColor}) {
    return (
        <Container color={bgColor}>
            <Name clr={headerColor}>
                {name}
            </Name>
            <Description clr={descColor}>
                {desc}
            </Description>
            <Links>
                <a>Learn more ></a>
                <a>Buy ></a>
            </Links>
            <PhotoImage>
                <img src={url} alt=""/>
            </PhotoImage>
        </Container>
    )
}


const Container = styled.div`
    background-color: ${props => `#${props.color}`};
    display:flex;
    flex-direction: column;
    align-items: center;



`

const Name = styled.h2`
    margin-bottom: 10px;
    z-index: 10;
    font-size: 56px;
    line-height: 1.07143;
    font-weight: 600;
    color: ${props => `#${props.clr}`};;
    @media(max-width: 1070px){
        font-size: 48px;
        line-height: 1.083;
    }
    @media(max-width: 730px){
        font-size: 32px;
        line-height: 1.125;
    }
`

const Description = styled.h3`
    margin-bottom: 10px;
    color: ${props => `#${props.clr}`};
    z-index: 10;
    font-size: 28px;
    line-height: 1.10722;
    font-weight: 400;
    letter-spacing: 0.004em;
    @media(max-width: 1070px){
        font-size: 24px;
        line-height: 1.1667;
    }
    @media(max-width: 730px){
        font-size: 19px;
        line-height: 1.21;
    }
`

const Links = styled.div`
    z-index: 10;
    display:flex; 
    text-decoration: none;
    color: #06c;
    letter-spacing: inherit;
    a{
        margin-right: 30px;
        text-decoration: none;
        cursor:pointer;
        line-height: 1.21053;
        font-weight: 400;

    }  
`

const PhotoImage = styled.div`
    padding: 20px 20px;
    margin-top: -200px;
    img{
        width: 1070px;

        @media(max-width: 730px){
            width: 734px;
            margin-top: 50px;
        }
    }
`

export default PhoneModel
