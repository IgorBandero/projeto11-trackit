import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./Context";
import styled from "styled-components"
import Header from "./Header"
import Menu from "./Menu"
import NewHabit from "./NewHabit";
import Habit from "./Habit";

export default function MyHabits(props){

    const { userInfo, setUserInfo } = useContext(Context);
    const [zeroHabits, setZeroHabits] = useState(false);
    const [statusNewHabit, setStatusNewHabit] = useState("none");
    const [habitCreated, setHabitCreated] = useState(undefined);
    const [habitsList, setHabitsList] = useState([]);

    useEffect(() => {

        const token = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)
           
        .then(response => listHabits(response.data))
            
        .catch(() => handleError())

        }, [habitCreated])

    function showNewHabitForm(){
        setStatusNewHabit("flex");
    }

    function cancelNewHabit(){
        setStatusNewHabit("none");
    }

    function newHabitCreated(){
        setZeroHabits(false);
        {habitCreated ? setHabitCreated(false) : setHabitCreated(true)};
    }

    function listHabits(habits){

        if (habits.length === 0){
            setZeroHabits(true);
        }

        setHabitsList(habits);        
    }

    function handleError(){    
        alert("Erro ao listar os hábitos, por favor tente novamente! ");         
    }

    function handleDeleteError(){    
        alert("Erro ao apagar o hábito, por favor tente novamente! ");         
    }

    function deleteHabit(id){
        let decision = window.confirm("Deseja realmente de apagar o hábito? ");

        const token = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        if (decision === true){

            let urlHabit = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id;
            
            axios.delete(urlHabit, token)
           
            .then(response =>  {habitCreated ? setHabitCreated(false) : setHabitCreated(true)})
                
            .catch(() => handleDeleteError());
            
        }
    }

    return (    
        <Container>
            <Header />
            <div className="myHabits"> 
                <p> Meus hábitos </p>
                <button data-test="habit-create-btn" onClick={showNewHabitForm} > + </button>
            </div>
            
            <NewHabit cancelFunction={cancelNewHabit} newHabitFunction={newHabitCreated} status={statusNewHabit} />
            
            {habitsList.map(element => 
            <Habit key={element.id} id={element.id} name={element.name} days={element.days} delete={deleteHabit} /> )} 

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
    margin-bottom: 70px;
    padding-bottom: 40px;
    overflow-x: scroll;

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
        cursor: pointer;
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