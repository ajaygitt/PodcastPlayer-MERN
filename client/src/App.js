import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import User from './components/User/User'
import { Link, useHistory } from 'react-router-dom'
function App() {
  return (
   <div className="App">

<Router>

  <Route path='/'> <User/>  </Route>
</Router>

   </div>


  );
}

export default App;
