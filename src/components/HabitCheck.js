import { useState } from "react"
import styled from "styled-components"
import checkimage from "../assets/checkmark.png"

export default function HabitCheck(props){

    const [titleHabit, setTitleHabit] = useState("Ler 1 capítulo de livro");
    const [sequence, setSequence] = useState("4 dias");
    const [record, setRecord] = useState ("5 dias")
    const [colorCheck, setColorCheck] = useState("#EBEBEB");
    const [borderCheck, setBorderCheck] = useState("1px solid #E7E7E7")
    // when checked background: #8FC549 border: none

    return (
        <Container data-test="today-habit-container">
            <div className="text" > 
                <h2 data-test="today-habit-name"> {props.name} </h2>
                <p data-test="today-habit-sequence"> Sequência atual: <span> {props.current} </span> </p>
                <p data-test="today-habit-record"> Seu recorde: <span> {props.highest} </span> </p>
            </div>            
            <div className="button"> 
                <button data-test="today-habit-check-btn" onClick={() => props.habitDone(props.id)} style={{background: props.done ? "#8FC549" : "#EBEBEB", 
                border: props.done ? "none" : "1px solid #E7E7E7"}}>  <img src={checkimage} /> </button>
            </div>   
        </Container>
    )
}

const Container = styled.div`

    width: 340px;
    min-height: 90px;
    margin: 10px auto 0 auto;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    position: relative;

    h2 {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 5px;
    }

    .button button {
        width: 70px;
        height: 70px;
        border-radius: 5px;
        margin-right: 17px;
        cursor: pointer;
    }

    .button button img {
        width: 50px;
        height: 50px;
    }

    .text {

        padding-left: 20px;
        margin-right: 20px;
        span {
            color: #8FC549;
        }

        p {
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
        }
    } 

`