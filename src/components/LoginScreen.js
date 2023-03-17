import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function LoginScreen (){

   

    return (

        <Container>
            <Logo />
            <input data-test="email-input" name="email" type="text" placeholder="email" ></input>
            <input data-test="password-input" name="password" type="text" placeholder="senha"></input>
            <button data-test="login-btn"> Enviar </button>
            <Link to="/cadastro"> <span data-test="signup-link"> Não tem uma conta? Cadastre-se! </span> </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        left: 36px;
        top: 279px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 5px;
        padding-left: 10px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button {
        width: 303px;
        height: 45px;
        margin-bottom: 25px;
        background: #52B6FF;
        border-radius: 5px;
        border-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }

    a {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        cursor: pointer;
    }
`