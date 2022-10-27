import { NavLink } from "react-router-dom";
import { Arrow, Container, ImageContainer, Wrapper,Image, InfoContainer, Button, Slide, Title, Description } from "./Slider.styled";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import firstImage from "../../../assets/images/3.png";
import secondImage from "../../../assets/images/4.png";
import thirdImage from "../../../assets/images/2.png";
import { useState } from "react";




function Slider(): JSX.Element {

    const [slideIndex, setSlideIndex] = useState(0);

    function handleClick(direction:string){
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    
    }


    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    <Slide bg="f5fafd">
                    <ImageContainer>
                        <Image src={firstImage}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <NavLink to='/products'>
                        <Button>SHOP NOW</Button>
                        </NavLink>
                    </InfoContainer>
                    </Slide>
                    <Slide bg="fcf1ed">
                    <ImageContainer>
                        <Image src={secondImage}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <NavLink to='/products'>
                        <Button>SHOP NOW</Button>
                        </NavLink>
                    </InfoContainer>
                    </Slide>
                    <Slide bg="fbf0f4">
                    <ImageContainer>
                        <Image src={thirdImage}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <NavLink to='/products'>
                        <Button>SHOP NOW</Button>
                        </NavLink>
                    </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlinedIcon/>
                </Arrow>
            </Container>
        </div>
			
    );
}

export default Slider;
