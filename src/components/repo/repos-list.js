import React from 'react';
import styled from 'styled-components';
import AddRepo from './addRepo';
// eslint-disable-next-line
import {apis} from '../apis/apis';
//import styles from './mystyle.module.css';


const Repo = (props)=>{
    

    //console.log(props.username);
    //console.log('repositories of the user are',props.user);

    const style={
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    }

   const style2={
    height: '400px',
    overflowY: 'scroll',
    //width: 'fit-content',
    overflowX:'noscroll'
   };
        
    

    return(
        <>
        <div className="col-lg border border-dark px-0" id="repo-list">
           <div style={style2}>
        
        {
        props.user.map(function(element, index, array){
            var sendData=()=>{
                props.selectedRepo(element.name);
            }
            return(
                <div className="row border border-dark px-4 py-1" style={style} onClick={()=>{sendData()}}>
                    <div>
                    <h6>{element.name}</h6>
                    </div>
                    
                    <div style={{fontSize:'0.8rem'}}>
                    {element.description || 'Oops no description :('}
                    </div>
                    
                    
                    
                </div>
                
            );
        })
        }
        </div>
        <div class="mx-3">
       <AddRepo user={props.user} addNewRepo={props.addNewRepo}/>
       </div>
       </div>
            
        </>
    );

};

export default Repo;

const Div =styled.div`
height: 400px;
overflow-Y: scroll;

`;

