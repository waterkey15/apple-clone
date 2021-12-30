import React from 'react'
import StoreItem from './StoreItem'
import styled from 'styled-components'
import ItemAndProperties from './ItemAndProperties'
import IphoneItem from './IphoneItem'

function Iphone() {
    return (
        <div>
            <StoreItem id={5} isBig={false} textColor="1d1d1f" bgColor="fdfdf5" image="https://www.apple.com/v/iphone/home/bd/images/overview/hero/iphone_13_pro__en2q051lfus2_medium_2x.jpg" price={999} desc="Oh. So. Pro" name="iPhone 13 Pro" isNew={false}/>
            <StoreItem id={6} isBig={true} textColor="fff" bgColor="122339" image="https://www.apple.com/v/iphone/home/bd/images/overview/hero/iphone_13__fc54ap6asium_medium_2x.jpg" price={699} desc="Your new superpower" name="iPhone 13" isNew={false}/>
            <Options>
                <OptionHeader>
                    Which iPhone is right for you?
                </OptionHeader>
                <MacContainer>
                    <IphoneItem id={1} megaSafeImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_magsafe_13_pro__c5p150pkegk2_large_2x.png" battery="Up to 28 hours video playback" speedDesc="Superfast 5G" speed="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_5g__d9f779gu7zue_large_2x.png" chipDesc="A15 Bionic chip Fastest chip in a smartphone" chipImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_a15__e4w3h31hw3ue_large_2x.png" cameraDesc="Pro camera system Telephoto, Wide, Ultra Wide" cameraImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_13_pro_camera__bod1a8vtrb8i_large_2x.png" retina='6.7" or 6.1"' retinaDesc="All-screen OLED display with ProMotion" price={999} desc="The ultimate iPhone." procdutName="iPhone 13 Pro" iphoneImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/compare_iphone_13_pro__etecge8yu8q6_medium_2x.jpg"/>
                    <IphoneItem id={2} megaSafeImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_magsafe_13__ck7xlrxghvhy_large_2x.png" battery="Up to 19 hours video playback" speedDesc="Superfast 5G" speed="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_5g__d9f779gu7zue_large_2x.png" chipDesc="A15 Bionic chip Faster than the competition" chipImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_a15__e4w3h31hw3ue_large_2x.png" cameraDesc="Advanced dual‑camera system Wide, Ultra Wide" cameraImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_13_camera__dnzaq129yc6e_large_2x.png" retina='6.1" or 5.4"' retinaDesc="All-screen OLED display" price={699} desc="A total powerhouse." procdutName='iPhone 13' iphoneImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/compare_iphone_13__ejsyn7suyw02_medium_2x.jpg"/>
                    <IphoneItem id={3} megaSafeImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_magsafe_12__v76jgtf6gvmu_large_2x.png" battery="Up to 17 hours video playback" speedDesc="Superfast 5G" speed="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_5g__d9f779gu7zue_large_2x.png" chipDesc="A14 Bionic chip" chipImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_a14__ct5klfqznl0m_large_2x.png" cameraDesc="Dual‑camera system Wide, Ultra Wide" cameraImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_12_camera__dp0qkc0fakeq_large_2x.png" retina='6.1" or 5.4"' retinaDesc="All-screen OLED display" price={599} desc="As amazing as ever." procdutName='iPhone 12' iphoneImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/compare_iphone_12__edurff15kyoi_medium_2x.jpg"/>
                    <IphoneItem id={4} megaSafeImg='./img/empty-png.png' battery="Up to 13 hours video playback" speedDesc="4G LTE cellular" speed="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_4g__feejrx91rliu_large_2x.png" chipDesc="A13 Bionic chip" chipImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_a13__ganfijtry0ya_large_2x.png" cameraDesc="Single-camera system Wide" cameraImg="https://www.apple.com/v/iphone/home/bd/images/overview/compare/icon_se_camera__bchmuv8yilhu_large_2x.png" retina='4.7"' retinaDesc="LCD display" price={399} desc="Lots to love. Lots to spend" procdutName='iPhone SE' iphoneImage="https://www.apple.com/v/iphone/home/bd/images/overview/compare/compare_iphone_se__bw7vzp0qauuq_medium_2x.jpg"/>
                </MacContainer>
            </Options>
        </div>
    )
}

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

export default Iphone
