import { useState, useContext } from "react";
import { Context } from "./Context";
import styled from "styled-components"
import Header from "./Header"
import Menu from "./Menu"
import NewHabit from "./NewHabit";
import Habit from "./Habit";

export default function MyHabits(props){

    const { userInfo, setUserInfo } = useContext(Context);
    const [zeroHabits, setZeroHabits] = useState(true);

    return (    
        <Container>
            <Header />
            <div className="myHabits"> 
                <p> Meus hábitos </p>
                <button data-test="habit-create-btn"> + </button>
            </div>
            
            <NewHabit />
            <Habit />

            {zeroHabits ? (<p className="noHabitsMessage"> Você não tem nenhum hábito cadastrado ainda. 
                            Adicione um hábito para começar a trackear! </p>) : ("")}
            <Menu />
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

    .myHabits {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 28px 17px;
    }

    .myHabits p {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    .myHabits button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }

    .noHabitsMessage {
        margin-top: 29px;
        padding: 0 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`