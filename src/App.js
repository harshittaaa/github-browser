import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

// eslint-disable-next-line
import Repos from './components/repo/repos-list';
import BranchTab from './components/branch';
import IssueTab from './components/issues';

//import { Link } from 'react';
/* import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; */


function App() {
const [repoData, setRepodata] = useState([]);
const [userName, setUserName] = useState('');
const [branchTab, setBranchTab] = useState(true);
const [issueTab, setIssueTab] = useState(false);
const [repo, setRepo] = useState('');




  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response=>{
      if(response.ok)
        return response.json();
      throw response;
    })
    .then(data=>{
      setRepodata(data);
      setRepos(data);
    })
    }, [userName]);



  //let initRepoData;
 /*  if(localStorage.getItem(`${userName}-Repos`)===null)
  {
    initRepoData=repoData;
  }
  else{
    initRepoData= JSON.parse(localStorage.getItem(`${userName}-Repos`));
  } */

  const [repos, setRepos] = useState(repoData);
    


    /* useEffect(() => {
      setRepodata(repoData);
      //localStorage.setItem(`${userName}-Repos`, JSON.stringify(repos));
      
    }, [repoData]); */

   


    const showBranchTab=()=>{
      setBranchTab(true);
      setIssueTab(false);
    };

    const showIssuesTab=()=>{
      setBranchTab(false);
      setIssueTab(true);
    };

    const selectedRepo=(repoName)=>{
      setRepo(repoName);
    };
    const addNewRepo=(name, owner)=>{
      let newRepo={
        name:name,
        owner:{
          login: owner
        },
        description: null
      }

      setRepos([...repos, newRepo]);
      console.log('newly added repo',newRepo);
      console.log('changeable repo list',repos);
      console.log('fetched repo', repoData);

    };
    
    


    

  //console.log(repoData);


    
 
   return (
      <>
      
      <div className="container">
              <form id="userForm">
                  <div className="form-group">
                      <label>Enter username:</label>
                      <input className="form-control" id="usern" type="text" name="usern" onChange={event=>setUserName(event.target.value)}/>
                      {/*<button type="button" className="btn btn-default" onClick="getProfile()">See</button> */}
                  </div>
              </form>
          </div>
      <div className="container m-5">
  
        <div className="row bg-dark text-white border border-dark">
          <div className="" style={{margin:"auto"}}>
          Github Browser
          </div>
          
        </div>
        <div className="row border border-dark">
          {/* {repoData} */}
          <Repos username={userName} user={repos} selectedRepo={selectedRepo} addNewRepo={addNewRepo}/>
          <div className="col-lg border border-dark">
            <div className="row mx-1 my-3" style={{display:'flex', justifyContent:'flex-end'}} >
              <button className="border-0 bg-white" style={{cursor: 'pointer'}} type='button' onClick="" >DELETE</button>
            </div>
            
              <div className="mx-1 mt-1 row border-dark border">
                
                <button className="col border border-dark bg-white" style={{cursor: 'pointer'}} type='button' onClick={()=>{showBranchTab()}} >
                  {/* <div className="col border border-dark"> */}
                    Branches
                  {/* </div>  */} 
                </button>
                
                
                
                <button className="col border border-dark bg-white" style={{cursor: 'pointer'}} type='button' onClick={()=>{showIssuesTab()}} >
                  {/* <div className="col border border-dark"> */}
                  Issues
                  {/* </div> */}
                </button>
                
                <div className="col border border-dark">
  
                </div>
              </div>
              {branchTab && (
                <BranchTab username={userName} repo={repo}/>
              )
              }

              {issueTab && 
                ( 
                  <IssueTab username={userName} repo={repo}/>
                )
                }

              {/* <div className="mx-1 row border-dark border">
              " "
              </div>
              <div className="row mx-1 border-dark border">
              " "
              </div>
              <div className="row mx-1 mb-3 border-dark border">
              " "
              </div> */}
            
          </div>
        </div>
  
        </div>
        </>
    );
  
}

export default App;
