import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TodayScreen(){
    return (
        <Container>
            <Header> 

            </Header>
        </Container >
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
`

const Header = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background-color: #126BA5;
`