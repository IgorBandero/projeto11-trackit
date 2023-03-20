import { useState } from "react";
import styled from "styled-components"
import Header from "./Header"
import Menu from "./Menu"

export default function History(){

    return (
        <Container>
            <Header />
            <h2> Histórico </h2>
            <p className="message"> Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Menu />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 70px auto; 
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    

    h2 {        
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-top: 28px;
        padding-left: 18px;
    }

    .message {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        margin-top: 17px;
        padding-left: 18px;
    }
`

  