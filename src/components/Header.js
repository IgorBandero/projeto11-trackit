import styled from "styled-components"
import { useContext } from "react";
import { Context } from "./Context";

export default function Header (){

    const { userInfo, setUserInfo } = useContext(Context);

    return (
        <Container data-test="header">
            <p> Trackit </p>
            <img src={userInfo.image} alt="user image" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    padding: 20px;

    p {
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 98.5px;
    }
`