import { useState } from "react"
import styled from "styled-components"
import trashIcon from "../assets/delete.png"

export default function Habit(){

    const [titleHabit, setTitleHabit] = useState("Ler 1 capítulo de livro");

    return (
        <Container data-test="habit-container">
            <h2 data-test="habit-name" > {titleHabit} </h2>
            <div className="daysBtns"> 
                <button data-test="habit-day">D</button>
                <button data-test="habit-day">S</button>
                <button data-test="habit-day">T</button>
                <button data-test="habit-day">Q</button>
                <button data-test="habit-day">Q</button>
                <button data-test="habit-day">S</button>
                <button data-test="habit-day">S</button>
            </div>
            <img data-test="habit-delete-btn" className="deleteBtn" src={trashIcon} alt="delete image" />        
        </Container>
    )
}

const Container = styled.div`

    width: 340px;
    min-height: 90px;
    margin: 10px auto 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    position: relative;

    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-left: 20px;
        margin-top: 10px;
    }

    input {
        width: 300px;
        height: 45px;
        margin-top: 18px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        align-self: center;
    }

    input::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .daysBtns {
        margin-top: 10px;
        width: 300px;
        align-self: center;
    }

    .daysBtns button {
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
        margin-right: 5px;
    }

    .userChoice {
        width: 300px;
        align-self: center;
        display: flex;
        justify-content: right;
        margin-top: 30px;
    }

    .cancelBtn {
        border: none;
        background: none;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
    }
    
    .saveBtn {
        width: 84px;
        height: 35px;
        margin-left: 23px;
        background: #52B6FF;
        border-radius: 5px;
        border: 1px solid #52B6FF;

        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

    .deleteBtn {
        width: 13px;
        height: 15px;
        border: none;
        background: none;
        position: absolute;     
        right: 10px;
        top: 10px;
    }
    
`