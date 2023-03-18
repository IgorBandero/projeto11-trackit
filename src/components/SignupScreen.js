import Logo from "./Logo";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function SignupScreen(){

    const [nameUser, setNameUser] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [objNewUser, setObjNewUser] = useState([]);
    const [statusBtn, setStatusBtn] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "nameUser") {
            setNameUser(value);
        } else if (name === "image") {
            setImage(value);
        } else if (name === "email"){
            setEmail(value);
        }
        else if (name === "password"){
            setPassword(value);
        }
    }

    function signUp (event){
      
        event.preventDefault(); 

        let user = {
            email: email,
            name: nameUser,
            image: image,
            password: password 
        }

        setStatusBtn(true);
        setObjNewUser(user);

        const requestSignUp = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", objNewUser);
    
        requestSignUp.then(response => {
            navigate("/");
        });
   
        requestSignUp.catch(errorRequest => handleError());
    
    }

    function handleError(){
        setStatusBtn(false);      
        alert("Erro no cadastro, por favor tente novamente! ");         
    }


    return (
        <Container>
            <Logo />
            <form onSubmit={signUp}>
                <input data-test="email-input" disabled={statusBtn} name="email" type="email" placeholder="email" required value={email} onChange={handleChange}></input>
                <input data-test="password-input" disabled={statusBtn} name="password" type="password" placeholder="senha" required value={password} onChange={handleChange}></input>
                <input data-test="user-name-input" disabled={statusBtn} name="nameUser" type="text" placeholder="nome" required value={nameUser} onChange={handleChange}></input>
                <input data-test="user-image-input" disabled={statusBtn} name="image" type="text" placeholder="foto" required value={image} onChange={handleChange}></input>
                <button data-test="signup-btn" disabled={statusBtn} type="submit"> 
                    {statusBtn ? (
                        <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
                    ) : ("Cadastrar")} 
                </button>
            </form>           
            <Link to="/"> <span data-test="login-link"> Já tem uma conta? Faça login! </span> </Link>
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

    form {
        display: flex;
        flex-direction: column;
    }

    input:disabled {
        background-color: #F2F2F2;
    }

    input::placeholder {
        color: #DBDBDB;
    }

    input:focus, input:valid {
        color: black;
    }

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
    }

    button:disabled {
        opacity: 0.7;
    }

    button {
        width: 303px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
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

    input[type="file"]::file-selector-button {
        display: none;
    }

    

`