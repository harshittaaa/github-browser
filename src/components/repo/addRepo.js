import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
const AddRepo = (props) => {
    const [dialogBox, showDialogBox] = useState(false);
    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const addNewRepo=()=>{
        if(!name || !owner){
            alert('Invalid Repository!');
        }
        else
        props.addNewRepo(name,owner);
        showDialogBox(!dialogBox);
        //console.log('in adrepo',user);
    }
    

    const dialogbox=()=>{
        return(
            <Dialog>
                  <div>ADD NEW REPOSITORY</div>
                  <form>
                      <label>
                          Owner/Organization
                      </label>
                      <input type="text" id="owner" onChange={(e)=>{setOwner(e.target.value)}}/>
                      <label>
                          Repository Name
                      </label>
                      <input type="text" id="repo-name" onChange={(e)=>{setName(e.target.value)}}/>
                    <button class="text-white" type="button" onClick={()=>{addNewRepo()}}>ADD</button>
                  </form>
            </Dialog>
        );

    };
    return (
        <div class="row border border-dark" style={{padding: '4rem 1rem 1rem 1rem'}}>
            <Div onClick={()=>{showDialogBox(!dialogBox)}}>
            <button class="border-0" type="button">
                <i class="fas fa-plus"></i>
            </button>
            </Div>

            {dialogBox && dialogbox()}
            
        </div>
    )
};
export default AddRepo;

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius:50%;
width: 36px;
height: 36px;
&:hover,&:focus,&:focus-within,&:focus-visible{
    box-shadow: 3px 3px 3px #b5b4b4;
}

button{
    
    width: 24px;
    height: 24px;
    background-color:white;
    border-radius: 50%;
    &:focus,&:focus-within,&:focus-visible{
        outline-color: transparent !important;
        
    }
    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

}

`;

const Dialog = styled.div`
background-color: white;
z-index: 1;
position: fixed;

border: 1px solid black;
top: 30%;
left: 30%;

div{
    text-align: center;
    margin: 10px 0;
}
form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    width: 300px;
    margin: 20px 40px 40px 40px;
    button{
        background-color: black;
        width: 120px;
        margin: 20px auto;
        padding: 10px; 
        border: none;
        &:focus,&:focus-within,&:focus-visible{
            outline-color: transparent !important;   
        }
        &:active {
            transform: scale(0.95);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }

    }
    
}

`;
