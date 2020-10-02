import React,{useState} from 'react';

const Dropdown=(props)=>{
    const[show,setShow]=useState(false);

    const renderData=props.alldata.map(data=>{
if(props.defaultOption.value===props.updatedLanguage.value)
{
    return null;
}
        return(
            <React.Fragment key={data.label}>
 <a className="dropdown-item" onClick={()=>props.updatedLanguage(data)}
 style={{cursor:'pointer'}}
 >{data.label}</a>
            </React.Fragment>
            
            
    
        )
    })
return(
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 style={{textAlign:'center'}}>Show Courses</h1>
            </div>
        </div>


        <div className="row" align="center">
            <div className="col-md-12">
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
    onClick={()=>setShow(!show)}>
      {props.defaultOption.label}
    </button>
    <div className={`dropdown-menu ${show ? 'show' :''}` }aria-labelledby="dropdownMenuButton" style={{marginLeft:'380px'}}>
     {renderData}
      </div>
  </div> 
  </div>
  </div>
  </div>
)

}

export default Dropdown;