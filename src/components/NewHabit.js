import { useState } from "react"
import styled from "styled-components"

export default function NewHabit(){

    const [valueHabit, setValueHabit] = useState("");

    function createNewHabit(){
        console.log("Criar um novo hábito");
    }

    return (
        <Container data-test="habit-create-container">
            <input data-test="habit-name-input" type="text" name="nameHabit" value={valueHabit} placeholder="nome do hábito" onChange={createNewHabit}/ > 
            <div className="daysBtns"> 
                <button data-test="habit-day">D</button>
                <button data-test="habit-day">S</button>
                <button data-test="habit-day">T</button>
                <button data-test="habit-day" >Q</button>
                <button data-test="habit-day">Q</button>
                <button data-test="habit-day">S</button>
                <button data-test="habit-day">S</button>
            </div>
            <div className="userChoice"> 
                <button data-test="habit-create-cancel-btn" className="cancelBtn"> Cancelar </button>
                <button data-test="habit-create-save-btn" className="saveBtn"> Salvar </button>
            </div>
        </Container>
    )
}

const Container = styled.div`

    width: 340px;
    height: 180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;

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
        line-height: 25px;
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
    
`