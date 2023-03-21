import { useState } from "react"
import styled from "styled-components"
import trashIcon from "../assets/delete.png"
import DayBtn from "./DayBtn";

export default function Habit(props){

    function isSelected(day){

        let daysList = props.days;

        switch (day) {
            case "Dom":
              daysList.push(7);
                break;
            case "Seg":
                daysList.push(1);
                break;
            case "Ter":
                daysList.push(2);
                break;
            case "Qua":
                daysList.push(3);
                break;
            case "Qui":
                daysList.push(4);
                break;
            case "Sex":
                daysList.push(5);
                break;
            case "Sab":
                daysList.push(6);
                break;
            default:
              console.log("Erro ao selecionar o dia");
                break;
        }
    }
    
    return (
        <Container data-test="habit-container">
            <h2 data-test="habit-name" > {props.name} </h2>
            <div className="daysBtns"> 
                <DayBtn day="Dom" status={(props.days.includes(7)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Seg" status={(props.days.includes(1)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Ter" status={(props.days.includes(2)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Qua" status={(props.days.includes(3)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Qui" status={(props.days.includes(4)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Sex" status={(props.days.includes(5)) ? true : false} selectFunction={isSelected} />
                <DayBtn day="Sab" status={(props.days.includes(6)) ? true : false} selectFunction={isSelected} />
                    
            </div>
            <img data-test="habit-delete-btn" onClick={() => props.delete(props.id)} className="deleteBtn" src={trashIcon} alt="delete image" />        
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
        display: flex;
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
        cursor: pointer;
    }
    
`