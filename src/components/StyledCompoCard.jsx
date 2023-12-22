import styled from "styled-components";
import { createGlobalStyle, keyframes, css } from 'styled-components';
import logo from "../assets/logo1-nobg.png";
import { useState } from "react";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500; /* Montserrat Medium has a font weight of 500 */
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

const RotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

const Container = styled.div`
margin : 5em;
width: 500px;
border-radius: 8px;
box-shadow: 2px 2px 7px black;
`;

const Logo = styled.img`
  border-radius: 8px 8px 0px 0px;
  ${({ rotating }) =>
    rotating &&
    css`
      animation: ${RotateAnimation} 2s linear infinite;
    `}
`;


const Head = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Title = styled.h1`
margin: 20px 0px 0px 5px;
`;

const Button = styled.button`
margin: 5px 50px 0px 5px;
padding: 0.5em;
`;

const Para = styled.p`
margin: 20px 0px 0px 5px;
font-size: 1.5em;
`;

const LilPara = styled.p`
margin: 10px 0px 5px 5px;
font-size: 1em;
`;

const StyledCompoCard = () => {

  
    const [isRotating, setIsRotating] = useState(false);

    const handleButtonClick = () => {
      setIsRotating(!isRotating);
    };
  

    return (
        <>
          <Container>
            <GlobalStyle />
            <Logo src={logo} rotating={isRotating} />
            <Head>
            <Title>CUBE 2023 </Title>
            <Button onClick={handleButtonClick}>rotate</Button>
            </Head>
            <Para>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quae
              eveniet temporibus omnis minima animi aut expedita delectus, suscipit
              accusamus.
            </Para>
            <LilPara>Brand protected by nobody since idk ®</LilPara>
          </Container>
        </>
      );
}

export default StyledCompoCard;