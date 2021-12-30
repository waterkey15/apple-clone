import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ITEM } from '../features/basket/basketSlice';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


function ItemAndProperties({id, macImage, procdutName, price, chipImage, fromCPU, toGPU, ram, storage, retina, battery, facetimeQuality, weight}) {

    const basket = useSelector((state) => state.basket.value);
    const dispatch = useDispatch();
    console.log(basket)

    const [showPopUp, setShowPopUp] = useState(false);

    const addItem = () =>{
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
        }, 5000);
        dispatch(ADD_ITEM({
            id: id,
            name: procdutName,
            img: macImage,
            price: price
        })) 
    }



    return (
        <Container>
            {
                showPopUp&&(
                    <AddToBasketPopUp>
                        <PopUpContainer>
                        <AddIcon/>
                        <p>Item added</p>
                        <CloseIconContainer>
                            <CloseIcon onClick={(e) => setShowPopUp(false)}/>
                        </CloseIconContainer>
                        </PopUpContainer>
                    </AddToBasketPopUp>
                )
            }
            <FirstPartContainer>
                <ImageContainer>
                    <img src={macImage} alt=""/>
                </ImageContainer>
                <ColorPicker>
                    <img src="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_swatches_three_colors__bagzlsvl2ehu_large_2x.png" alt=""/>
                </ColorPicker>
                <Header>
                    {procdutName}
                </Header>
                <Price>
                    From ${price}
                </Price>
                <BuyButton onClick={addItem}>
                    Buy
                </BuyButton>
                <LearnMore>
                    Learn more >
                </LearnMore>
                <br/>
            </FirstPartContainer>
            
            <Properties>
                <Processor>
                    <img src={chipImage} alt=""/>
                    <p>Apple M1 chip</p>
                </Processor>
                <FromCPU>
                    <h4>{fromCPU}-core</h4>
                    <p>CPU</p>
                </FromCPU>
                <UpCPU>
                    <p>Up to</p>
                    <h4>{toGPU}-core</h4>
                    <p>GPU</p>
                </UpCPU>
                <Memory>
                    <img src="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_unified_memory__emykppauav2a_large_2x.png" alt=""/>
                    <p>Up to {ram}GB unified memory</p>
                </Memory>
                <Memory2>
                    <h4>{storage}TB</h4>
                    <p>Maximum configurable storage</p>
                </Memory2>
                <Retina>
                    <h4>{retina}</h4>
                    <p>Retina display</p>
                </Retina>
                <Battery>
                    <img src="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_battery__fk0ughiyc3am_large_2x.png" alt=""/>
                    <p>Up to {battery} hours battery life</p>
                </Battery>
                <Facetime>
                    <img src="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_camera__dlxow9r3leie_large_2x.png" alt=""/>
                    <p>{facetimeQuality}p FaceTime HD camera</p>
                </Facetime>
                <Weight>
                    <h4>{weight}</h4>
                    <p>Weight</p>
                </Weight>
                <TouchID>
                    <img src="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_touchid__fanxgkqe1xei_large_2x.png" alt=""/>
                    <p>Touch ID</p>
                </TouchID>

            </Properties>

        </Container>
    )
}


const Container = styled.div`
    @media(max-width: 830px){
        min-width: 50%;
    }
    min-width: 33%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  `

const FirstPartContainer = styled(Container)`
    border-bottom: 1px solid #d2d2d7;

`

const ImageContainer = styled.div`
    img{
        width: 222px;
        height: 125px;
        cursor: pointer;
        @media(max-width: 830px){
            width: 138px;
            height: auto;
        }
    }
`

const ColorPicker = styled.div`
    margin-top: 11px;
    margin-bottom: 31px;
    /* @media(max-width: 830px){
        padding-left:40px;
    } */
    img{
        width: 50px;
        height: 14px;
    }
`

const Header = styled.h3`
    font-size: 21px;
    line-height: 1.19048;
    font-weight: 600;
    margin: 0;
    letter-spacing: 0.011em;
    color: #1d1d1f;
    text-align: center;
    @media(max-width: 830px){
        font-size: 17px;
        line-height: 1.47;
        font-weight: 600;
        letter-spacing: 0.011em;
    }
`

const Price = styled.p`
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 400;
    text-align: center;

`

const BuyButton = styled.button`
    margin-top: 1.4em;
    cursor:pointer;
    text-decoration: none;
    text-align: center;
    font-size: 17px;
    line-height: 1.17;
    font-weight: 400;
    min-width: 28px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 980px;
    background: #0071e3;
    border: none;
    color: #fff;
    @media(max-width: 830px){
        font-size: 12px;
        line-height: 1.3337;
        min-width: 23px;
        padding-left: 11px;
        padding-right: 11px;
        padding-top: 4px;
        padding-bottom: 4px;
        margin: 0;
    }
`
const LearnMore = styled.a`
    margin-top: 1em;
    color: #06c;
    letter-spacing: inherit;
    cursor: pointer;
    font-size: 17px;
    line-height: 1.47;
    font-weight: 400;
    padding-bottom: 23px;
    @media(max-width: 830px){
        font-size: 14px;
        line-height: 1.42;

    }
`

const Properties = styled.div`
    display: flex;
    flex-direction: column;
`

const Processor = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    img{
        margin-bottom: 7px;
        margin-left: auto;
        margin-right: auto;
        width: 48px;
        height: 49px;
        object-fit: contain;
    }
    p{
        margin: 0;
        font-size: 14px;
        line-height: 1.42;
        font-weight: 400;
        width: 100%;
        text-align:center
    }
`

const FromCPU = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
    h4{
        font-size: 21px;
        line-height: 1.19;
        font-weight: 600;
        letter-spacing: 0.011em;
        @media(max-width: 830px){
            font-size: 17px;
            line-height: 1.47;
        }
    }
    p{
        font-size: 14px;
        line-height: 1.42;
        font-weight: 400;
        margin-top:-19px;
    }
`

const UpCPU = styled(FromCPU)`
    margin-top: 19px;
    p{
        margin-bottom:-15px;
    }
`

const Memory = styled(Processor)``

const Memory2 = styled(FromCPU)``

const Retina = styled(FromCPU)`
    margin-top:0;
`

const Battery = styled(Processor)`
    margin-top:12px;
`

const Facetime = styled(Processor)`
    margin-top:45px;
`

const Weight = styled(FromCPU)``

const TouchID = styled(Battery)``
const AddToBasketPopUp = styled.div`
    position: fixed;
    bottom:10%;
    right: 10%;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    display: flex;
    @media(max-width:830px){
        bottom:10%;
        right:0;
        left: 0;
    }
    animation: fadeInAnimation ease-in-out 0.2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
`

const PopUpContainer = styled.div`
    
    display:flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: grey;
    border-radius: 4px;
    padding: 0 10px;
    color: #fff;
    p{
        margin-left: 10px;
        font-size: 17px;
        margin-right: 20px;
    }
`

const CloseIconContainer = styled.div`
    position: absolute;
    top:0;
    right:0;
    svg{
        font-size: small;
        cursor:pointer;
    }
`

export default ItemAndProperties
