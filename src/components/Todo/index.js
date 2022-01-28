import React,{useState} from 'react';
import Input from '../Input';
import Table from '../Table';

export default function Todo() {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");

    const  onSubmit  = (e)  =>{
        e.preventDefault()
    console.log("submitted")
    
      setData(data.concat(name))
     console.log(data)
     setName('')
    
    }
const onChange=(event)=>{
    setName(event.target.value)
}
  return (
<>
<Input
 onSubmit ={onSubmit} 
 onChange ={onChange} 
 name={name} />

<Table  
datas={data}
/>
</>
)



}
