import React from 'react'
import PhoneModel from './PhoneModel'
import StoreItem from './StoreItem'
import styled from 'styled-components'
import ItemAndProperties from './ItemAndProperties'

function Mac() {

    return (
        <Container>
            <StoreItem id={7} bgColor="fdfdf5" image="https://www.apple.com/v/mac/home/bk/images/overview/hero/hero_macbook_pro_14_16__0y2t2v3g4hu2_medium_2x.jpg" price={1999} desc="Supercharged for pros" name="MacBook Pro" isNew={true}/>
            <Options>
                <OptionHeader>
                    Which Mac is right for you?
                </OptionHeader>
                <OptionSelector>
                    Notebook
                </OptionSelector>
                <MacContainer>
                    <ItemAndProperties id={8} weight={"2.8 lb."} facetimeQuality={720} battery={18} retina='13.3"' storage={2} ram={16} toGPU={8} fromCPU={8} chipImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png" price={999} procdutName="MacBook Air" macImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_mba__fchj615oz0yi_medium_2x.png"/>
                    <ItemAndProperties id={9} weight={"3.0 lb."} facetimeQuality={720} battery={20} retina='13.3"' storage={2} ram={16}  toGPU={8} fromCPU={8} chipImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_m1__dsskrswqk7wy_large_2x.png" price={1299} procdutName='MacBook Pro 13"' macImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_mbp13__euj5z15300om_medium_2x.png"/>
                    <ItemAndProperties id={10} weight={"3.5 lb. or 4.7 lb."}facetimeQuality={1080} battery={21} retina='14.2 or 16.2"' storage={8} ram={64} toGPU={32} fromCPU={10} chipImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_icon_m1_pro_max__d1toavnfl1m6_large_2x.png" price={1999} procdutName='MacBook Pro 14" and 16"' macImage="https://www.apple.com/v/mac/home/bk/images/overview/compare/compare_mbp14_and_16__f2dhysusb5im_medium_2x.png"/>
                </MacContainer>
            </Options>
        </Container>
    )
}



const Container = styled.div`
    background-color: #fafafa;
`

const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const OptionHeader = styled.p`
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0em;
    color: #1d1d1f;
    @media(max-width: 830px){
        font-size: 32px;
        line-height: 1.125;
        font-weight: 600;
        letter-spacing: 0.004em
    }

`

const OptionSelector = styled.p`
    border-bottom: 1px solid #d2d2d7;
    font-size: 17px;
    color: #1d1d1f;
    font-weight: 400;
    line-height: 1.4795;
    padding-bottom: 12px;
`

const MacContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    @media(max-width: 830px){
        text-align: left;
    }
`

export default Mac
