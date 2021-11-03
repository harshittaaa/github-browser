import React, { useEffect, useState } from 'react';

const Issues = ({username, repo}) => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repo}/issues`)
        .then(response=>{
          if(response.ok)
            return response.json();
          throw response;
        })
        .then(data=>{
            setIssues(data);
        })
        }, [repo]);


        const style={
            display:'flex',
            flexDirection:'column'
        }

    console.log(repo);
    return (
        <div style={{height: '430px', overflow: 'scroll'}}>
            {issues.map((element, index, branches)=>{
                return(
                   
                    <div className="row border border-dark mx-1 px-2 py-1" style={style}>
                        <div>
                        {element.title.toUpperCase()}
                        </div>
                        <div>
                        <img src={element.user.avatar_url} alt="user avatar" style={{margin: '0 0.5rem', width:'32px', height:'32px', borderRadius:'50%'}}/>
                        {element.user.login}
                        </div>
                        
                    </div>
                    
                    
                );
            })}
        </div>
    )
};

export default Issues;
