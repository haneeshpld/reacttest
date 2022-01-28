import React,{Fragment,useState} from 'react';


function Input(props) {
  return (
    <Fragment>
<form onSubmit={props.onSubmit}>
<input type="text" onChange={props.onChange} value={props.name}></input>
<button type="submit">Submit</button>
</form>

    </Fragment>
  )
}


export default Input;
