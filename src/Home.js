import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
function Home() {

  return(

    <Link to="/todo"><button>Todo</button></Link>

  )

}

export default Home;
