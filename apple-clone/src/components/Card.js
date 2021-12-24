import React from 'react'
import styled from 'styled-components'

function Card({isNew, logo, desc, isProduct, name, bgImage, iscolorWhite}) {
    return (
        <Container color={iscolorWhite} image={bgImage} new={isNew}>
            <BackgroundImage>
                <img src="" alt=""/>
            </BackgroundImage>
            <TopPart color={iscolorWhite}>
                <span>
                    {
                        isNew? ("New") : ("")
                    }
                </span>
                {
                    logo !== "" ? (<img src={logo} alt=""/>) : (<h1>{name}</h1>)
                }
                {/* <img src="https://www.apple.com/v/home/ai/images/logos/watch-series-7/tile_watch_logo_lte__h7snssb7mqq2_medium_2x.png" alt=""/> */}
                <h5>{desc}</h5>
                {
                    isProduct?(
                        <Links color={iscolorWhite}>
                        <a href="#">Learn more ></a>
                        <a href="#">Buy ></a>
                        </Links>
                    ):
                   (
                    <Links color={iscolorWhite}>
                        <a href="#">Stream now ></a>
                    </Links>
                   )
                }
            </TopPart>
        </Container>
    )
}


const Container = styled.div`
    width: 50%;
    background-image: ${props => `url('${props.image}')`};
    width: 734px;
    height: 548px;
    background-size: 120% auto;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props => props.new? '#f5f5f7': "#fbfbfd"};

    margin-right: 10px;
    @media(max-width: 830px){
        width: 100%;
        background-size: ${props => props.color? '734px 548px' : '120% auto '};
        /* background-size: 334px 250px; */
    }
`

const BackgroundImage = styled.div`
`
const TopPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.color? "130px" : ""};
    h1{
        color: ${props => props.color ? "white" : "#000"};
        margin-top: 42px;
        font-size: 32px;
        line-height: 1.125;
        font-weight: 600;
        letter-spacing: 0.022em;
    }

    span{
        margin-top: 26px;
        color: #bf4800;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 400;
    }

    img{
        width: 30%;
        margin-top: 10px;
        @media(max-width: 830px){
            width: 104px;
        }
    }
    h5{
        margin-top: 11px;
        font-size: 19px;
        font-weight: 400;
        letter-spacing: 0.012em;
        text-align: center;
        margin-left: 4px;
        margin-right: 4px;
        color: ${props => props.color ? "#f5f5f7" : "#000"};
    }
`

const Links = styled.div`
    padding: 10px;
    a{
        text-decoration: none;
        color: ${props => props.color ? "#f5f5f7" : "#06x"};
        font-size: 17px;
        line-height: 1.2353;
        font-weight: 400;
        margin: 10px;
    }
`



export default Card
