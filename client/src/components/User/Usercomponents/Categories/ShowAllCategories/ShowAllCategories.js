import { useEffect, useState } from "react"
import Server from "../../../../../Server"
import axios from 'axios'
import { data } from "jquery"
import { Card, Navbar, Button, navbar, Form } from "react-bootstrap";
import '../ShowAllCategories/ShowAllCategories.css'
import "bootstrap/dist/css/bootstrap.min.css";
import MusicPlayer from "../../Music Player/MusicPlayer";
import { useHistory } from "react-router";


export default function ShowAllMusics(){
const [musics,setMusic]=useState([])
const [ImagePath,setImagePath]=useState()
const [musicBool, setMusicBool] = useState(false);

let history=useHistory()

useEffect(() => {
  let token = localStorage.getItem("jwt");
  if (!token) {
    history.pushState("/");
  }

  let jwt = localStorage.getItem("jwt");
  let userId = localStorage.getItem("userId");

  console.log("kasdf");
  axios.get(Server+'/getAllMusics').then((result)=>{
    // console.log("the result is",result);
    setMusic(result.data);
    setImagePath(Server + "/Podcasts/");
  });
}, []);







function getMusicId(id){

    console.log(id);
       localStorage.setItem("musicId", id);
    setMusicBool(true);
    history.push('/musicPlayer')

    }


console.log("the music is this",musics);
return(

    <div>
        <div className="body">
      <div className="row">

{musics.length>0 ? (

    musics.map((data,index)=>{


return(

<div>

<div className="cardTile">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={ImagePath+data._id + ".jpg"} />
                  <Card.Body>
                    <Card.Title>{data._id}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>
                    <Button
                      variant="primary"
                      value={data._id}
                      onClick={(e) => getMusicId(e.target.value)}
                    >
                      play Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>


</div>

);

    })
)  :  (
    <div> </div>

)}


</div>
</div>

{musicBool== true ? <MusicPlayer/> :<div></div> }
<div id="musicplayer"></div>
    </div>

)
}