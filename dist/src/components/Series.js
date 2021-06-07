import React,{ useEffect, useState } from 'react';
import _  from 'underscore';
import '../App.css';
import Header from './Header';

export default function Series() {
    const [data, setData] = useState([]);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    const apiGet= () =>{
        fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then(response =>
            { if(!response.ok)
                {
                    throw Error("Oops.. Something Went Wrong");
                }
                return response.json()})
        .then((json) => {
            let res=json.entries.filter(it=>it.programType==="series" && it.releaseYear>=2010);
            var sortedObjs = _.sortBy( res, 'title' );
            console.log(sortedObjs);
            setData(sortedObjs);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            setError(err.message);
           setIsPending(false);
        });

    };
    useEffect(()=>{
        apiGet();
    },[]);
    return (
        <div className="series">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading....</div>}
            <Header name="Popular Series"/>
            <div className="flex-direction">
                    {data.slice(0,21).map(item=>
                         <div  key={ item.title} className="card">
                           <img className="medium" src={item.images["Poster Art"].url} alt={item.title } />
                         
                         <div className="card-body">
                             <h4>{item.title}</h4>
                         </div>              
                        </div>
                    )}
                </div>
        </div>

    )
}
