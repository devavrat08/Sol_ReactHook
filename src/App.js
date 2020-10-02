import React,{useState} from 'react';
import Accordion from './accordion'
import Dropdown from './dropdown';
import Translate from './translate';
import Wikipedia from './wikipedia';

function App(){
    const[option,setOption]=useState('Select Course');

    const items=[{
        title:'what is react',
        description:'React is a UI component based library'
    },
    {
        title:'Who made React',
        description:"It's made by facebook"
    },
    {
        title:'Why we use React',
        description:'It uses virtual dom and its fast as compare to another framework or library'
    }
];

const options=[
    {
    label:'angular',
    value:'master angular'
    },
    {
        label:'react',
        value:'master react'
    }


]
    return(
        <React.Fragment>
           {/* <Accordion items={items}/> */}
           {/* <Wikipedia/> */}
           {/* <Dropdown alldata={options} defaultOption={option} updatedOption={setOption}/> */}
        <Translate/>
        </React.Fragment>
    )
}

export default App;