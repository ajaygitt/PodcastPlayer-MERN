import React, { useState } from 'react'
import {BrowserRouter, BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Header from './Header'
import Login from './Usercomponents/Login/Login'
import Home from './Usercomponents/Home/Home'
import Signup from './Usercomponents/signup/Signup'
import Demo from './Usercomponents/demo'

import { Link, useHistory } from 'react-router-dom'
import { render } from 'react-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyProfile from './Usercomponents/MyProfile/MyProfile'
import AddNewPodcast from './Usercomponents/Podcasts/AddNewPodcast/AddNewPodcast'
import MusicPlayer from './Usercomponents/Music Player/MusicPlayer'
import ShowAllMusics from './Usercomponents/Categories/ShowAllCategories/ShowAllCategories'

export default function User(){

        const [music, setMusic] = useState()

        return(
<div>



<Router>
<ToastContainer position="top-center"/>

    <Route  path="/" exact >  <Login/> </Route> 
    <Route  path='/login' exact> <Login/> </Route>
    <Route  path='/signup' > <Signup/> </Route>
    <Route path='/home'><Header/><Home/> </Route>
    <Route path='/profile'>  <Header/>    <MyProfile/>     </Route>
    <Route path="/AddNewPodcast" > <AddNewPodcast />  </Route>
    <Route path="/music"><MusicPlayer music={music} />   </Route>
    <Route path='/showMusic'><Header/>     <ShowAllMusics/>   </Route>

</Router>



</div>
        )
 
}