import React, { useState } from 'react';
import Convert from './convert';
import Dropdown from './dropdown'; 


const options=[
    {
    label:'Hindi',
    value:'hi'
    },
    {
        label:'Marathi',
        value:'mr'
    },
    {
        label:'Tamil',
        value:'ta'
    },
    {
        label:'English',
        value:'en'
    },
    {
        label:'Spanish',
        value:'es'
    }



]

const Translate=()=>{
const[language,setLanguage]=useState(options[0]);
const[text,setText]=useState('');
//const[option,setOption]=useState(options[0].value);

return(
   <div className="container">
       <div className="row">
           <div className="col-md-12">
               <input type='search' className='form-control' placeholder='search'
               onChange={(e)=>setText(e.target.value)}
               />
                          </div>
       </div>
       <Dropdown alldata={options} defaultOption={language}  updatedLanguage={setLanguage}/>
        <Convert text={text} language={language} />

   </div>
)

}

export default Translate;