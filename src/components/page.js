import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
//import styles from './mystyle.module.css';

const page = ()=>{
    return(
    <div>
        <div className="row bg-dark text-white border border-dark">
        <div className="" style={{margin:"auto"}}>
        Github Browser
        </div>
        
      </div>
      <div className="row border border-dark">
        <div className="col-lg border border-dark">

        </div>
        <div className="col-lg border border-dark">
          <div className="row mx-1 my-3" style={{display:'flex', justifyContent:'flex-end'}} >
            <button className="border-0 bg-white" style={{cursor: 'pointer'}} type='button' onClick="" >DELETE</button>
          </div>
          
            <div className="mx-1 mt-1 row border-dark border">
              <div className="col border border-dark">
              <button className="border-0 bg-white" style={{cursor: 'pointer'}} type='button' onClick="" >
                Branches
                </button>
              </div>
              
              <div className="col border border-dark">
              <button className="border-0 bg-white" style={{cursor: 'pointer'}} type='button' onClick="" >
                Issues
                </button>
              </div>
              <div className="col border border-dark">

              </div>
            </div>
            <div className="mx-1 row border-dark border">
            " "
            </div>
            <div className="row mx-1 border-dark border">
            " "
            </div>
            <div className="row mx-1 mb-3 border-dark border">
            " "
            </div>
          
        </div>
      </div>
    </div>
    );

    

};

export default page;