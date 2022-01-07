import React, { useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import { auth } from '../firebase/firebase';
import { SET_USER } from '../features/user/userSlice';



function Header() {

    const url = window.location.pathname.split('/').pop();
    const [burgerStatus, setBurgerStatus] = useState(false);
    const basket = useSelector((state) => state.basket.value);
    const dispatch = useDispatch();

    const [showSignOut, setShowSignOut] = useState(false);

    const user = useSelector((state) => state.user.value);
    console.log(user);

    const handleSignOut = () => {
        dispatch((SET_USER({
            email: null,
            userID: null
        })));
    }


    useEffect(()=>{
        setBurgerStatus(false);
    }, [url])


    return (
        
        <Container>
            <ListContainer>
                <MenuIcon>
                    <DragHandleIcon onClick={() => setBurgerStatus(true)}/>
                </MenuIcon>
                <Link1 to="/">
                    <AppleLI>
                        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt=""/>
                    </AppleLI>
                </Link1>
                <StoreLI>Store</StoreLI>
                <Link to="/mac">
                    <MacLI>Mac</MacLI>
                </Link>
                <Link to="/iphone">
                    <IphoneLI>iPhone</IphoneLI>
                </Link>
                <IPadLI>iPad</IPadLI>
                <WatchLI>Watch</WatchLI>
                <AirpodsLI>AirPods</AirpodsLI>
                <TVLI>TV & Home</TVLI>
                <OnlyLI>Only on Apple</OnlyLI>
                {
                    user.userEmail&& (
                        <Link to="/orders">
                            <AccessoriesLI>Orders</AccessoriesLI>
                        </Link>
                    )
                }
                {
                    user.userEmail? (
                    <IconContainer show={showSignOut? "true" : "false"} onClick={(e) => setShowSignOut(!showSignOut)}>
                        <PersonIcon />
                        <div>
                            <p onClick={handleSignOut}>Sign Out</p>
                            <p>{user.userEmail}</p>
                        </div>

                    </IconContainer>)
                    :
                    <Link to="/signin">
                        <SupportLI>Sign In</SupportLI>
                    </Link>
                }
                <SearchLI>
                    <SearchIcon/>
                </SearchLI>
                <Link2 to="/subtotal">
                    <CartLI>
                        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt=""/>
                        <p>
                            {basket.length}
                        </p>
                    </CartLI>
                </Link2>
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
                    <li>
                        <Link2 to="/mac">
                            Mac
                        </Link2>
                    </li>
                    <li>iPad</li>
                    <li>
                        <Link2 to="/iphone">
                            iPhone
                        </Link2>
                    </li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>
                        <Link2 to="/signin">
                            Sign In
                        </Link2>
                    </li>
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
    position:fixed;
`
const ListContainer = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0 5% 0 5%;
    span{
        margin: 0;
    }
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

const CartLI = styled.div`
    width: 13px;
    padding-right: 12px;
    display: flex;
    padding-right: 3px;
    justify-content: center;
    align-items:center;
    p{
        margin-left:5px;
    }

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

const Link1 = styled(Link)`
    text-decoration: none;
    list-style-type: none;
    @media(max-width:830px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const Link2 = styled(Link)`
    text-decoration: none;
    color: #fff;
`

const IconContainer = styled.li`
    display:flex;
    flex-direction: column;
    align-items: center;
    cursor:pointer;
    @media(max-width:830px){
        margin-right: 20px;
    }
    p{
        font-size: 20px;
    }

    div{
        font-size: 12px;
        margin-top: 30px;
        position: fixed;
        z-index: 10000000;
        background-color: #fff;
        color: #000;
        padding: 5px 15px;
        border-radius: 14px;
        display: ${props => props.show == "true" ? "block" : "none"};
        p{
            margin: 10px 0;
            font-size: 12px;
            border-bottom: 1px solid #424245;
            padding-bottom: 5px;
        }
    }

`

export default Header
