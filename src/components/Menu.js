import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import { useState, useEffect, useContext } from "react";
import 'react-circular-progressbar/dist/styles.css';

export default function Menu (props){

    const navigate = useNavigate();
    const [totalHabits, setTotalHabits] = useState(props.habitsTotal);
    const [doneHabits, setDoneHabits] = useState(props.done);

    function goTodayScreen(){
        navigate("/hoje");
    }

    return (
        <Container data-test="menu">
            
            <button data-test="habit-link" onClick={() => navigate("/habitos")}> Hábitos </button> 
            <button data-test="today-link"  className="todayBtn" onClick={goTodayScreen}> 
                <div className="progressBar">
                    <CircularProgressbar value={props.done} maxValue={props.habitsTotal} text={"Hoje"} trailColor={"black"} strokeWidth={10} 
                                    styles={{
                                        path: {
                                        stroke: "#FFFFFF",
                                        transition: "stroke-dashoffset 0.5s ease 0s",
                                        },
                                        trail: {
                                        stroke: "#52B6FF"
                                        },
                                        text: {
                                        fill: "#FFFFFF",
                                        fontSize: "22px",
                                        },
                                    }}/>
                </div>
            </button>
            
            <button data-test="history-link" onClick={() => navigate("/historico")}> Histórico </button>                 
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    padding: 35px;
    background-color: #FFFFFF;
    z-index: 2;

    .today {
        color: #FFFFFF;
    }

    .todayBtn {
        background: none;
        cursor: pointer;
    }

    button {
        background: none;
        border: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
        cursor: pointer;
    }

    .CircularProgressbar {
        width: 76px;
        height: 76px;
        position: absolute;
        //bottom: 10px;
        font-family: 'Lexend Deca', sans-serif;
        line-height: 22px;
        background: #52B6FF;
        border-radius: 50%;
    }

    .progressBar {
        width: 90px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 10px;
        left: calc(50vw - 45px);
        background-color: #52B6FF;
        border-radius: 50%;
    }

`