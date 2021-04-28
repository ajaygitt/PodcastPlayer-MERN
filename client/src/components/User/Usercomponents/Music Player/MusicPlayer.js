import react, { useEffect, useState } from "react";
import "../Music Player/MusicPlayer.css";
import Server from "../../../../Server";

export default function MusicPlayer(props) {


  useEffect(() => {

    let aud = document.getElementById("audio");
    aud.pause();
    let id = localStorage.getItem("musicId");
    console.log("yuifd", id);
    setMusicId(id);
    console.log("goood", musicId);
    if (id) {
  
        
        aud.load(); //call this to just preload the audio without playing
  aud.play();

    }
  });

  const [musicId, setMusicId] = useState();

  console.log("this is props data successs", props.data);
  return (
    <div>
      <h1>Music {props.info}</h1>
      <div>
        <div className="container-audio">
          <p> {Server + "/Podcasts/" + musicId + ".mp3"}</p>
          <audio controls loop autoplay id="audio">
            <source
              src={Server + "/Podcasts/" + musicId + ".mp3"}
              type="audio/ogg"
            />
            Your browser dose not Support the audio Tag
          </audio>
        </div>
      </div>
    </div>
  );
}
