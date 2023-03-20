import styled from "styled-components"
import { Context } from "./Context";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import HabitCheck from "./HabitCheck";

export default function HabitsDeck(props){

    const { userInfo, setUserInfo } = useContext(Context);

    const login = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`
        }
    }

    useEffect(() => {
            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", login)
             .then(response => props.handleHabits(response.data))
             .catch(errorRequest => handleError())
        }, [])

    function handleError(){
        console.log("Deu erro!");
    }

    return (
        <Container>
            <HabitCheck />
            <HabitCheck />
            <HabitCheck />         
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`