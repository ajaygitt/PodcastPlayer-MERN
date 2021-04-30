import react, { useEffect, useState } from "react";
import "../Home/home.css";
import { nav, Navbar, Button, navbar, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../../Header";
import Trending from "../Categories/Trending/Trending";
import RecentlyAdded from "../Categories/RecentlyAdded/RecentlyAdded"
import MusicPlayer from "../Music Player/MusicPlayer"

export default function Home() {


const [MusicId,setMusicId]=useState('parent')

console.log("The Music Id at parent is ",MusicId);

  let history = useHistory();

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (!token) {
      history.push("/");
    }
  });

  return (
    <div>
      <div>
<div className="heading2 "> 
  <h1 id="h1"  > Recently Added </h1>
</div>
      <div>
   <RecentlyAdded changeMusicId={MusicId=>setMusicId(MusicId)}/>
 
      </div>
     
      <div className="heading2"> 
  <h1 id="h1"  > Trending Now</h1>
</div>
      <div>
        {/* <Trending/> */}
     
      </div>
      </div>

    </div>

  );
}
