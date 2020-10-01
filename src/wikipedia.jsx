import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Wikipedia=()=>{
    const[term,searchTerm]=useState('');
    const[SearchData,setSearchData]=useState([]);
  //  console.log('initial render');
    useEffect( ()=>{
      //  console.log('hey re render');
      const search =async()=>{
          let response=await axios.get('https://en.wikipedia.org/w/api.php',{
              params:{
                  action:'query',
                  list:'search',
                  format:'json',
                  origin:'*',
                  srsearch:term

              }
          })
          console.log(response);
      setSearchData(response.data.query.search)
      }

      setTimeout(()=>{
        if(term)
        {
          search();
  
        }
      },1000)
      
      
    },[term]);


    return(
       <div className="container">
           <div className="row">
               <div className="col-md-12">
                   <input type="search"
                   placeholder="search" className="form-control"
                   onChange={(e)=>searchTerm(e.target.value)}/>
               </div>   
           </div>
           <div className="row">
               {
                   SearchData.map(data=>(
                    <div className="col-md-12" key={data.pageid}>
                       
                        <div className="card">
                        <a href={`https://en.wikipedia.org/?curid=${data.pageid}`} style={{textAlign:"right"}}>Go to Page</a>
                            <div className="card-title">
                                {data.title }
                            </div>
  <div className="card-body">
    {data.snippet}
  </div>
</div>
                    </div>

                   ))
               }
           </div>

       </div>
    ) 
}


export default Wikipedia;