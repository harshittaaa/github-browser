import React, { useEffect, useState } from 'react';

const Branch = ({username, repo}) => {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${username}/${repo}/branches`)
        .then(response=>{
          if(response.ok)
            return response.json();
          throw response;
        })
        .then(data=>{
          setBranches(data);
        })
        }, [repo]);


    console.log(repo);
    return (
        <>
            {branches.map((element, index, branches)=>{
                return(
                    <div key={index} className="row border border-dark mx-1 px-2">
                        {element.name}
                    </div>
                );
            })}
        </>
    )
};

export default Branch;
