import styled from "styled-components"
import { useState } from "react"

export default function DayBtn(props){

    const [btnStatus, setBtnStatus] = useState(props.status);

    if (typeof props.day !== typeof "Exemplo"){
        return
    }

    function selectDay(day){

        let status = btnStatus;
        {btnStatus ? status=false : status=true};
        setBtnStatus(status);
        props.selectFunction(day);
    }

    return (
        
        <Container> 
            <button disabled={props.disabled} data-test="habit-day" type="button" style={{background: btnStatus ? "#CFCFCF" : "#FFFFFF", 
            color: btnStatus ? "#FFFFFF" : "#DBDBDB", border: btnStatus ? "1px solid #CFCFCF" : "1px solid #D5D5D5"}} 
            onClick={() => selectDay(props.day)}>{props.day[0]}</button>
        </Container>            
    )
}

const Container = styled.div`

    button {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }
    
` 