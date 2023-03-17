import Logo from "./Logo";
import styled from "styled-components";
import { useState } from "react";

export default function SignupScreen(){

    const [nameUser, setNameUser] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
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

    function signUp (emailUser, passwordUser, nameUser, imageUser){
      
        let objNewUser = {
            email: emailUser,
            password: passwordUser, 
            name: nameUser,
            image: imageUser
        }

        console.log(objNewUser);
    }


    return (
        <Container>
            <Logo />
            <input data-test="email-input" name="email" type="text" placeholder="email" value={email} onChange={handleChange}></input>
            <input data-test="password-input" name="password" type="password" placeholder="senha" value={password} onChange={handleChange}></input>
            <input data-test="user-name-input" name="name" type="text" placeholder="nome" value={nameUser} onChange={handleChange}></input>
            <input data-test="user-image-input" name="image" type="file" placeholder="foto" value={image} onChange={handleChange}></input>
            <button data-test="signup-btn" onClick={() => signUp(email, password, nameUser, image)} > Cadastrar </button>
            <a data-test="login-link"> Já tem uma conta? Faça login! </a>
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

    input[type="file"]::file-selector-button {
        display: none;
    }

`