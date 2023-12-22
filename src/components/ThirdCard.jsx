import styled from "styled-components";
import logo from "../assets/logo3.jpg";
import { CiMenuBurger } from "react-icons/ci";

const MyDiv = styled.div`
background-color: white;
border-radius: 8px;
border: 1px solid black;
width: 300px;
height: fit-content;
box-shadow: 2px 2px 7px black;
`
const MyHead = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5em;
`
const MyLogo = styled.img`
border-radius: 10px;
margin: 15px;
height: 75px;
width: 75px;
`

const MyBurger = styled(CiMenuBurger)`
margin: 10px;
font-size: 2em;
`

const MyLilTitle = styled.h3`
width: fit-content;
border-radius: 15px;
padding: 10px;
color: white;
background-color:darkred;
font-size: 1em;
margin: 5px 20px 20px 8px;
`

const MyBigTitle = styled.h1`
font-size: 1.5em;
margin: 5px 20px 20px 8px;
`

const MyDesc = styled.p`
font-size: 1em;
margin: 5px 20px 20px 8px;
`

const ThirdCard = () => {
  return (
    <>
      <MyDiv className="container">
        <MyHead className="head">
        <MyLogo className="logo" src={logo} alt="logo" />
        <MyBurger />
        </MyHead>
        <MyLilTitle className="liltitle">here is the "famous" cube</MyLilTitle>
        <MyBigTitle className="bigtitle">CUBE 2023 </MyBigTitle>
        <MyDesc className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio accusantium quaerat vero, eveniet odit autem! Voluptates consequatur minus praesentium.</MyDesc>
      </MyDiv>
    </>
  );
};

export default ThirdCard;
