import styled from "styled-components";
import { Context } from "./Context";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Logo from "./Logo";

export default function LoginScreen (){  

    const { userInfo, setUserInfo } = useContext(Context);
    const [objUser, setObjUser] = useState(undefined);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusBtn, setStatusBtn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (objUser !== undefined){
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", objUser)
             .then(response => join(response.data))
             .catch(() => handleError())
        }}, [objUser])

             
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "email"){
            setEmail(value);
        }
        else if (name === "password"){
            setPassword(value);
        }
    }

    function signIn(event){

        event.preventDefault(); 

        let user = {
            email: email,
            password: password 
        }
        setStatusBtn(true);
        setObjUser(user);
    }

    function handleError(){
        setStatusBtn(false);      
        alert("Erro no login, por favor tente novamente! ");         
    }

    function join (userLogged){
        setUserInfo(userLogged);
        navigate("/hoje");
    }

    return (
        <Container>
            <Logo />
            <form onSubmit={signIn}>
                <input data-test="email-input" disabled={statusBtn} name="email" type="text" placeholder="email" value={email} onChange={handleChange} ></input>
                <input data-test="password-input" disabled={statusBtn} name="password" type="password" placeholder="senha" value={password} onChange={handleChange} ></input>
                <button data-test="login-btn" disabled={statusBtn} type="submit"> 
                
                {statusBtn ? (
                    <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
                ) : ("Enviar")}

                </button>
            </form>            
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
        font-family: 'Lexend Deca', sans-serif;;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
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
`