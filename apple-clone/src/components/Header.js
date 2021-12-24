import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);


    return (
        <Container>
            <ListContainer>
                <MenuIcon>
                    <DragHandleIcon onClick={() => setBurgerStatus(true)}/>
                </MenuIcon>
                <AppleLI>
                    <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt=""/>
                </AppleLI>
                <StoreLI>Store</StoreLI>
                <MacLI>Mac</MacLI>
                <IphoneLI>iPhone</IphoneLI>
                <IPadLI>iPad</IPadLI>
                <WatchLI>Watch</WatchLI>
                <AirpodsLI>AirPods</AirpodsLI>
                <TVLI>TV & Home</TVLI>
                <OnlyLI>Only on Apple</OnlyLI>
                <AccessoriesLI>Accessories</AccessoriesLI>
                <SupportLI>Support</SupportLI>
                <SearchLI>
                    <SearchIcon/>
                </SearchLI>
                <CartLI>
                    <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt=""/>
                </CartLI>
            </ListContainer>

            <BurgerNav show={burgerStatus}>
                <Logo>
                    <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt=""/>
                </Logo>
                <BurgerLogo>
                    <CloseWrapper onClick={() => setBurgerStatus(false)}>
                        <CustomClose/>
                    </CloseWrapper>
                </BurgerLogo>
                <InputBox>
                    <input type="text" placeholder="Search apple-clone.com"/>
                    <SearchIcon/>
                </InputBox>
                <BurderListItemContainer>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>Support</li>
                </BurderListItemContainer>


            </BurgerNav>
        </Container>
    )
}


const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: #1D1D1F;
    color: white;
    align-items: center;
    overflow: hidden;
`
const ListContainer = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0 5% 0 5%;
`

const AppleLI = styled.li`
    width:14px;
    font-size: 12px;
    font-weight: 400;
    line-height: 3.6667;
    letter-spacing: -.01e,;
    color: #f5f5f7;
    padding: 0 8px;
    height: 44px;
    opacity: 0.8;
    text-decoration: none;
    cursor:pointer;
`

const StoreLI = styled(AppleLI)`
    max-width: 51px;
    width: 2.5em;
    cursor:pointer;
    @media(max-width: 830px){
        display:none; 
    }

`

const MacLI = styled(StoreLI)`
    max-width: 39.1px;
    width: 1.91667em;
`

const IphoneLI = styled(StoreLI)`
    max-width: 64.6px;
    width: 3.16667em;
`

const IPadLI = styled(StoreLI)`
    max-width: 40.8px;
    width: 2em;
`

const WatchLI = styled(StoreLI)`
    max-width: 59.5px;
    width: 2.91667em;
`

const AirpodsLI = styled(StoreLI)`
    max-width: 73.1px;
    width: 3.58333em;
`

const TVLI = styled(StoreLI)`
    max-width: 110.5px;
    width: 5.41667em;
`

const OnlyLI = styled(StoreLI)`
    max-width: 136px;
    width: 6.6667em;
`

const AccessoriesLI = styled(StoreLI)`
    max-width: 113.9px;
    width: 5.58333em;
`

const SupportLI = styled(StoreLI)`
    max-width: 74.8px;
    width: 3.66667em;
`

const SearchLI = styled(StoreLI)`
    width: 15px;
    display: flex;
    align-items: center;
    @media(max-width: 830px){
        display: none;
        align-items: center;    
    }
    
`

const CartLI = styled(AppleLI)`
    width: 13px;
    padding-right: 12px;
`

const MenuIcon = styled(AppleLI)`

    display: none;

    @media(max-width: 830px){
        display: flex;
        align-items: center;    
    }
`


const BurgerNav = styled.div`
    margin-left: -20px;
    margin-right: -20px;
    background-color: #1D1D1F !important;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left:0;
    background-color: white;
    width: 100%;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
    transition: transform 0.4s ease-in-out;


    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a{
            font-weight: 600;
        }
    }
`

const CloseWrapper = styled.div`
    position: relative;
    right: 0px;
    left: 20px;
    bottom: 7px;


`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    color: #fff;
`

const BurgerLogo = styled.div`
    display: flex;
    position: absolute;

    img{
        margin-left: 40px;
        width:14px;
        font-size: 12px;
        font-weight: 400;
        line-height: 3.6667;
        letter-spacing: -.01e,;
        color: #f5f5f7;
        padding: 0 8px;
        height: 44px;
        opacity: 0.8;
        text-decoration: none;
        cursor:pointer;
    }
`

const Logo = styled.div`
    position: relative;
    top:-20px;
    bottom: 50px;
    left:48%;
    
`

const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        @media (max-width: 500px){
            width: 100%;
            margin-left: 10px;
        }
        width:50%;
        background-color: #424245;
        line-height: 2.11765em;
        border: none;
        box-sizing: border-box;
        font-size: 17px;
        font-weight: 400;
        color: #86868B;
        border-radius: 10px;
        
    }

    SearchIcon{
        width:100px;
    }
`

const BurderListItemContainer = styled.ul`
    li{
        width: 70%;
        font-size: 17px;
        line-height: 1.2353;
        font-weight: 400;
        border-bottom: 1px solid rgba(0, 0, 0, 0.92);
    }
    list-style-type: none;
    margin: 0;
    padding: 0 5% 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px){
        margin: 0;
   }

`

export default Header
