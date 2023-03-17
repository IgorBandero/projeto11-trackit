import styled from "styled-components";
import logo from "../assets/logo.png";

export default function Logo(){
    return (
        <Container>
            <img src={logo} alt="logo"/>
            <p> TrackIt </p>
        </Container>
    )
}

const Container = styled.div`
    width: 180px;
    height: 180px;
    margin-bottom: 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 90px;
    }

    p{
        font-family: 'Playball', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 69px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
    }

`