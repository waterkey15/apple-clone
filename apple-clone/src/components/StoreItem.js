import React, { useState } from 'react'
import  styled  from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ITEM } from '../features/basket/basketSlice';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


function StoreItem({id, textColor, bgColor, isNew, name, desc, price, image, isBig}) {

    const basket = useSelector((state) => state.basket.value);
    const dispatch = useDispatch();
    const [showPopUp, setShowPopUp] = useState(false);


    const addItem = () =>{
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
        }, 5000);
        dispatch(ADD_ITEM({
            id: id,
            name: name,
            img: image,
            price: price
        })) 
    }



    return (
        <Container txtColor={textColor} bg={bgColor}>
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
            {
                isNew?(<span>New</span>) : ""
            }
            <h2>{name}</h2>
            <Label>
                <p>
                    {desc}
                </p>
            </Label>
            <Price>
                <p>From ${price}</p>
            </Price>
            <BuyButton onClick={addItem}>
                Buy
            </BuyButton>
            <LearnMore>
                Learn more >
            </LearnMore>
            <ProductImage big={isBig}>
                <img src={image} alt=""/>
            </ProductImage>
        </Container>
    )
}


const Container = styled.div`
    background-color: ${props => `#${props.bg}`};
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;
    color: ${props => `#${props.txtColor}`};
    
    span{
        font-weight: 600;
        font-size: 14px;
        line-height: 1.28577;
    }
    h2{
        font-size: 24px;
        line-height: 1.16777;
        font-weight: 600;
        letter-spacing: 0.009em;
        margin-bottom: 0;
        @media(max-width: 830px){
            font-size: 21px;
        }
    }
`

const Label = styled.div`
    margin-top: 1em;
    p{
        font-size: 40px;
        line-height: 1.1;
        font-weight: 600;
        letter-spacing: 0em;
        margin: 0;
        text-align: center;

    }

`

const Price = styled.div`
    margin-top: 1.4em;

    p{
        margin: 0;
        font-weight: 600;
        font-size: 17px;
        line-height: 1.47059;

    }
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
`

const LearnMore = styled.a`
    margin-top: 1em;
    color: #06c;
    letter-spacing: inherit;
    cursor: pointer;
    font-size: 17px;
    line-height: 1.47;
    font-weight: 400;
`

const ProductImage = styled.div`
    margin-top: 34px;
    width: ${props => props.big? "100%" : ""};
    display: flex;
    justify-content: center;
    img{
        left:50%;
        width: 736px;
        object-fit: contain;
        width: ${props => props.big? "100%" : ""};
        @media(max-width: 830px){
            width: 406px;
            width: ${props => props.big? "600px" : ""};
        }
    }

`
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


export default StoreItem
