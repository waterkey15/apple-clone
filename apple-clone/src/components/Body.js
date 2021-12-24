import React from 'react'
import  styled from 'styled-components'
import PhoneModel from './PhoneModel'
import Card from './Card'

function Body() {

    return (
        <Container>
            <LastChanceDiv>
                <p>Last chance to shop holiday gifts. Buy online and choose free two-hour courier delivery or pickup from an Apple Clone Store. Shop now ></p>
            </LastChanceDiv>
            <LastMinuteGifts>
                <AppleGiftLogo>
                    <img src="https://www.apple.com/v/home/ai/images/logos/holiday-2021/logo__dcojfwkzna2q_medium_2x.png" alt=""/>
                    <h2>Last-minute gifts for every last one.</h2>
                    <a href="#">Shop gifts ></a>
                </AppleGiftLogo>
            </LastMinuteGifts>
            <PhotosContainer>
                <Iphone1Img src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-a/iphone_alt__zuocx67xf4yu_medium_2x.png" alt=""/>
                <AirpodsImg src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-a/airpods__b0941p5gmwj6_medium_2x.png" alt=""/>
                <Iphone2Img src="https://www.apple.com/v/home/ai/images/heroes/holiday-2021/set-a/ipad__bq6djchifrbm_medium_2x.png" alt=""/>
            </PhotosContainer>
            <Seperator/>
            <PhoneModel descColor="1d1d1f" headerColor="1d1d1f" url="https://www.apple.com/v/home/ai/images/heroes/iphone-13-pro/hero_iphone_13pro__dhnsegysa42u_medium_2x.jpg" bgColor="FBFBFD" name="iPhone 13 Pro" desc="Oh. So. Pro."/>
            <PhoneModel descColor="fec2eb" headerColor="fff" url="https://www.apple.com/v/home/ai/images/heroes/iphone-13/hero_iphone_13__f194u1rdooeq_medium_2x.jpg" bgColor="33283D" name="iPhone 13" desc="Your new superpower"/>
            <Seperator/>
            <CardHolder>
                <Card/>
                <Card/>

            </CardHolder>

        </Container>
    )
}

const Container = styled.div`
    background-color: #EDEFFE;
    overflow: hidden;

`


const LastChanceDiv = styled.div`
    overflow: hidden;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    flex-basis: 100%;
    text-align: center;
    padding: 10px 10px;
    font-size: 14px;
    line-height: 1.47;
    font-weight: 400;
    background-color: #E34140;
    color: #fff;
    p{
        min-width: 70%;
        padding-left: 10px;
        padding-right: 10px;
    }
`

const LastMinuteGifts = styled.div`
    background-color: #EDEFFE;
`

const AppleGiftLogo = styled.div`
    padding-top: 20px;
    text-align: center;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 70px;
        object-fit: contain;
        @media(max-width: 830px){
            width: 54px;
        }
    }
    h2{
        margin-top: 15px;
        font-size: 48px;
        line-height: 1.08349;
        font-weight: 600;
        max-width: 460px;
        color: #1d1d1f;
    }
    a{
        text-decoration: none;
        color: #06c;
        letter-spacing: inherit;
    }
`

const PhotosContainer = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 40px;
    img{
        width: 240px;
    }

`

const Iphone1Img = styled.img`
    @media(max-width: 830){
        width: 240px;
    }
`
const Iphone2Img = styled.img`
    @media(max-width: 830px){
        display:none;
    }
`
const AirpodsImg = styled.img`
    @media(max-width: 830px){
        display:none;
    }
`

const Seperator = styled.div`
    background-color: #fff;
    min-height: 20px;
`

const CardHolder = styled.div`
    display:flex;
`


export default Body
