import React,{useEffect,useState} from 'react';
import axios from 'axios';
const Convert=(props)=>{
    const [convertText,setConvertText]=useState('');
console.log(props);
    useEffect(()=>{
        const lang=async ()=>{
            let response=await axios.post('https://translation.googleapis.com/language/translate/v2',{},
           { params:{
                q:props.text,
                target:props.language.value ,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
          //  console.log(response.data)
          if(!props.text){return null;}
          return setConvertText(response.data.data.translations[0].translatedText)
           
               
            
          
        }
        lang(); 
    },[props.text,props.language]) 
   



return(
    <React.Fragment>
        <h1>
            {convertText}
        </h1>
    </React.Fragment>
)
}


export default Convert;