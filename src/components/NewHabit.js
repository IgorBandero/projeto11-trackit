import { useState, useEffect, useContext  } from "react"
import styled from "styled-components"
import { Context } from "./Context";
import DayBtn from "./DayBtn";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function NewHabit(props){

    const { userInfo, setUserInfo } = useContext(Context);
    const [newHabit, setNewHabit] = useState(undefined);
    const [habitName, setHabitName] = useState("");
    const [days, setDays] = useState([]);
    const [statusBtn, setStatusBtn] = useState(false);
    const [resetDaysBtn, setResetDayBtn] = useState(false);
    const [daysList, setDaysList] = useState(["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", false])

    useEffect(() => {
        if (newHabit !== undefined){
            const token = {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`
                }
            }
            axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, token)
            .then(response => habitCreated(response.data))
            .catch(() => handleError())
        }}, [newHabit])

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "nameHabit"){
            setHabitName(value);
        }        
    }

    function getDay(day){
        let daysList = days;

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

        setDays(daysList);
    }

    function createHabit(event){
        setStatusBtn(true);
        event.preventDefault();          
        let habit = {
            name: habitName,
            days: days
        };    
        setNewHabit(habit);    
        props.cancelFunction();
    }

    function habitCreated(result){
        setStatusBtn(false)
        setHabitName("");
        props.newHabitFunction();
    }

    function handleError(){  
        setDaysList(["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", true]); 
        setStatusBtn(false)
        console.log("Erro no cadastro do novo hábito, por favor tente novamente! ");         
    }

    return (
        <Container data-test="habit-create-container" visibility={props.status}>

            <form onSubmit={createHabit}>
                <input disabled={statusBtn} data-test="habit-name-input" type="text" name="nameHabit" value={habitName} 
                placeholder="nome do hábito" onChange={handleChange}/ > 
                <div className="daysBtns"> 
                    
                {daysList.map((element, index) => 
                    <DayBtn key={index} status={statusBtn} disabled={statusBtn} 
                    day={element} selectFunction={getDay} /> )} 
                    
                </div>
                <div className="userChoice"> 
                    <button data-test="habit-create-cancel-btn" type="button" className="cancelBtn" 
                    onClick={props.cancelFunction} > Cancelar </button>
                    <button data-test="habit-create-save-btn" className="saveBtn" type="submit" 
                    name="save" > 
                    
                        {statusBtn ? (
                            <ThreeDots type="ThreeDots" color="#fff" height={20} width={50} />
                        ) : ("Salvar")} 
                    
                    </button>
                </div>
            </form>
        </Container>
    )
}

const Container = styled.div`

    width: 340px;
    height: 180px;
    margin: 0 auto;
    display: ${props => props.visibility};
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 5px;
    
    form {
        margin: 0 auto;
    }

    input:disabled {
        background-color: #F2F2F2;
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
        font-family: 'Lexend Deca', sans-serif;;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    input:focus, input:valid {
        color: black;
    }

    input::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }

    .daysBtns {
        display: flex;
        margin-top: 10px;
        width: 300px;
        align-self: center;
    }

    .userChoice {
        width: 300px;
        align-self: center;
        display: flex;
        justify-content: right;
        margin-top: 25px;
        margin-bottom: 25px;
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
        cursor: pointer;
    }
    
    .saveBtn {
        width: 84px;
        height: 35px;
        margin-left: 23px;
        background: #52B6FF;
        border-radius: 5px;
        border: 1px solid #52B6FF;
        cursor: pointer;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

    .ThreeDots {
        margin-left: 5px;
    }
    
`