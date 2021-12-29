import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Section>
                <ListContainer>
                    <li>
                        <span>
                        1. $0 two-hour delivery on purchases made from December 22 until December 24, 2021 on eligible Apple products in most metros. Offer is not available on customized Mac, engraved products, and for certain order types including orders paid for with financing or by bank transfer. Delivery times vary according to your selected delivery address, availability of your items, and the time of day you place your order. Find a store to view local store hours or see checkout for estimated delivery. A signature is required for delivery. Drivers may ask for verbal confirmation of receipt from a safe distance to satisfy the signature requirement.
                        </span>
                    </li>
                    <li>
                        <span>
                        To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.
                        </span>
                    </li>
                    <li>
                        <span>
                        Available for qualifying applicants in the United States.
                        </span>
                    </li>
                    <li>
                        <span>
                        Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
                        </span>
                    </li>
                    <li>
                        <span>
                        Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.
                        </span>
                    </li>
                    <li>
                        <span>
                        Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.
                        </span>
                    </li>
                </ListContainer>
                <Bottom>
                    <Contact>
                    More ways to shop: <a>Find an Apple Store</a> or other <a>retailer</a> near you. Or call 1-800-MY-APPLE.
                    </Contact>
                    <Copyright>
                        Copyright © 2021 Apple Inc. All rights reserved.
                        <Policies>
                            Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map
                        </Policies>
                        <Country>
                            United States
                        </Country>
                    </Copyright>
                </Bottom>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f5f5f7;
`

const Section = styled.div`
    border-bottom: 1px solid #d2d2d7;
    padding-top : 17px;
    font-size: 1em;
    margin-left: 8%;
    margin-right: 8%;
`

const ListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    border-bottom: 1px solid #d2d2d7;
    li{
        color: #6e6e73;
        font-size: 12px;
        line-height: 1.3337;
        font-weight: 400;
        letter-spacing: -.01em;
        padding-bottom: 0.8em;
    }

`

const Bottom = styled.div``


const Contact = styled.p`
    color: #6e6e73;
    font-size: 12px;
    line-height: 1.3337;
    font-weight: 400;
    letter-spacing: -.01em;
    padding-bottom: 0.8em;
    a{
        color: #0066CC;
    }
`

const Copyright = styled.div`
    color: #6e6e73;
    font-size: 12px;
    line-height: 1.3337;
    font-weight: 400;
    letter-spacing: -.01em;
    padding-bottom: 0.8em;
    a{
        color: #0066CC;
    }
    display:flex;
    align-content: center;
    justify-content: space-between;
`

const Policies = styled.div`

`
const Country = styled.div``

export default Footer
