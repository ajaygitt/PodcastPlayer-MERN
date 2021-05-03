import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../RecentlyAdded/RecentlyAdded.css";
import { Link } from 'react-router-dom'
import { Card, Navbar, Button, navbar, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router";
import Server from "../../../../../Server";
import { render } from "react-dom";
import MusicPlayer from "../../Music Player/MusicPlayer";

export default function RecentlyAdded(props) {
  let history = useHistory();
  const [recentlyAdded, setRecent] = useState([]);
  const [ImagePath, setPath] = useState();
  const [image, setImage] = useState([]);
  const [musicId, setMusicId] = useState();
  const [musicBool, setMusicBool] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (!token) {
      history.push("/");
    }

    let jwt = localStorage.getItem("jwt");
    let userId = localStorage.getItem("userId");

    console.log("kasdf");
    axios.get(Server + `/getRecentlyAdded?jwt=${jwt}`).then((response) => {
      console.log("the resopone", response.data);
      setRecent(response.data);
      setPath(Server + "/Podcasts/");
    });
  }, []);

  console.log("the data is ", recentlyAdded);

  function getMusicId(id) {
    setMusicId(id);
    localStorage.setItem("musicId", id);
    setMusicBool(true);

    history.push('/musicPlayer')
  }





  
  return (
    <div className="body">
      <div className="row">
        {recentlyAdded.length > 0 ? (
          recentlyAdded.map((data, index) => {
            return (
              <div className="cardTile">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" className="imgclass" src={ImagePath + data._id + ".jpg"} />
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
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
            );
          })
        ) : (
          <div></div>
        )}
      </div>

      <p>
        {" "}
 <button className="btn btn-secondary sidebtn">      <Link to='/showMusic'>    show more</Link> </button>  {" "}

      </p>



      <div id="musicplayer"></div>
    </div>
  );
}
