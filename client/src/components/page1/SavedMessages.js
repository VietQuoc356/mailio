import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import { Context } from "./../../context/Context";
import { ApiContext } from "../../context/ApiContext";
import styled from 'styled-components';


export default function SavedMessages() {
    return (
        <SavedMessagesWrapper>
           <Card>
            <h3>Message 1</h3>    
            </Card> 
            <Card>
            <h3>Message 2</h3>    
            </Card>     
            <Card>
            <h3>Message 3</h3>    
            </Card>  
            <Card>
            <h3>Message 4</h3>    
            </Card>  
        </SavedMessagesWrapper>
    )
}

const SavedMessagesWrapper = styled.div`
    height:100vh;
 `

const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;
align-items:center;

h3{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    align-items:center;
    width:300px;
    height:60px;
    background-color:white;
    border-radius:10px;
    margin:12px 0;
}

`

