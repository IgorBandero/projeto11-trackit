import { useState } from "react";
import styled from "styled-components"
import Header from "./Header"
import Menu from "./Menu"
import HabitsDeck from "./HabitsDeck";

export default function TodayScreen(){

    let todayDate = "Segunda, 17/05";

    const [todayHabits, setTodayHabits] = useState("Nenhum hábito concluído ainda")
    const [totalHabits, setTotalHabits] = useState(undefined);

    function getHabits(habits){
        let habitsTotal = habits.length;
        setTotalHabits(habitsTotal);
    }

    return (
        <Container>
            <Header />
            <Date>
                <h2 data-test="today" className="day"> {todayDate} </h2>
                <p data-test="today-counter" className="status"> {todayHabits} </p>
            </Date>       
            <HabitsDeck handleHabits={getHabits} />     
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
     