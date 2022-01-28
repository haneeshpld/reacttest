import React from 'react';

function Table(props) {
  return (<>
  
   
   
   
   <table border="1px"> 
        <thead>
            <tr>
                <td>S. No</td>
                <td>Name</td>
                <td>edit</td>
                <td>Delete</td>
            </tr>
        </thead>

        <tbody>
       { props.datas.map((data,i) =>{
    return( <tr key={i}>
      <td   >{i}</td>
      <td>{data}</td>
      <td><button>Edit</button></td>
      <td><button>Delete</button></td>
  </tr>)
  })}
            </tbody>
    </table>
    
    

  </>)
}

export default Table;
