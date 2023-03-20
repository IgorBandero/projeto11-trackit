import { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import Header from "./Header"
import Menu from "./Menu"
import HabitCheck from "./HabitCheck"
import { Context } from "./Context";
import axios from "axios";


export default function TodayScreen(){

    var dateToday = new window.Date();
    let year = dateToday.getFullYear();
    let month = dateToday.getMonth() + 1;
    let dayToday = dateToday.getDate();
    let weekday = dateToday.getDay();
    weekday = getDayName(weekday);
    let fullday = weekday + ", " + dayToday + "/" + month + "/" + year;

    const { userInfo, setUserInfo } = useContext(Context);
    const [todayHabitsList, setTodayHabitsList] = useState([]);
    const [totalHabits, setTotalHabits] = useState(undefined);
    const [message, setMessage] = useState("Nenhum hábito concluído ainda");

    useEffect(() => {
        
        const token = {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`
                }
            }

            axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token)
            .then(response => showHabits(response.data))
            .catch(() => handleError())
        }, [])

    function getDayName(day){

        switch (day) {
            case 1:
                return "Segunda";
                break;
            case 2:
                return "Terça";
                break;
            case 3:
                return "Quarta";
                break;
            case 4:
                return "Quinta";
                break;
            case 5:
                return "Sexta";
                break;
            case 6:
                return "Sábado";
                break;
            case 7:
                return "Domingo";
                break;
            default:
              console.log("Erro ao selecionar o dia");
                break;
        }
    }
    function showHabits(habits){
        let arrayHabits = habits;
        setToday();
        setTodayHabitsList(arrayHabits);
    }   

    function setToday(){

    }

    function handleError(){  
        alert("Erro ao mostrar os hábitos, por favor tente novamente! ");         
    }

    function getHabits(){

    }

    function selectHabit(id){

        let urlPost = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id + "/check";
        
        const token = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        axios.post(urlPost, token)
        .then(response => okay(response.data))
        .catch(() => handleError())
    }

    function okay (){
        console.log("Deu certo");
    }
    /*  
            */

    return (
        <Container>
            <Header />
            <Date>
                <h2 data-test="today" className="day"> {fullday} </h2>
                <p data-test="today-counter" className="status"> {message} </p>
            </Date>       
        
            {todayHabitsList.map (habit => 
                <HabitCheck habitDone={selectHabit} id={habit.id} name={habit.name} 
                done={habit.done} highest={habit.highestSequence} 
                current={habit.currentSequence} handleHabits={getHabits} />  
            )} 
               
            <Menu habitsTotal={totalHabits} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
`
const Date = styled.div`

    padding: 28px 17px;

    .day {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    .status {
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
    }
`
     