import react, { useEffect, useState } from "react";
import axios from "axios";
import Server from "../../../../../Server";
import Table from "react-bootstrap";
import { data } from "jquery";

export default function MyPodcasts() {
  const [podcasts, usepodcasts] = useState([]);
  const[jwt,usejwt]=useState([])
  console.log("teh ", podcasts);

  useEffect(() => {
    let jwt = localStorage.getItem("jwt");
    usejwt(jwt)
    axios.get(Server + `/myPodcast?jwt=${jwt}`).then((response) => {
      usepodcasts(response.data);
    });
  }, []);


function deletePodcast(id){
  alert('del clicked'+id)

console.log("the id is",id);

axios.delete(Server+`/deletePodcast?jwt=${jwt}&podcastId=${id}`).then(()=>{

  window.location.reload()

// document.getElementById(id).style.display="hidden"

})

}


  return (
    <div className="tableBody">
      <table class="table">
        <thead>
          <tr >
            <th scope="col">Upload Date</th>
            <th scope="col">Title</th>
            <th scope="col">Preview</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {podcasts.map((data, index) => {
            console.log("inside", data._id);

            return (
              <tr id={data._id}>
                <th scope="row">{data.date}</th>
                <td>{data.title}</td>
                <td>
                 
                 <img src='https://www.google.com/search?q=music+play+icon&sxsrf=ALeKk00qF7lIX1scKLgwxHCBAtMe_1fMfA:1619850520241&tbm=isch&source=iu&ictx=1&fir=-4dXMxEpdXDJ7M%252CRbNwXp1zhfssZM%252C_&vet=1&usg=AI4_-kRqbOBtfqN-a8qzWB7X5s1eiOZARA&sa=X&ved=2ahUKEwjOkuS27afwAhW_zDgGHS7uC9EQ9QF6BAgGEAE#imgrc=-4dXMxEpdXDJ7M'/>
                 
                </td>
                <td> <button className="btn btn-danger"id={data._id} onClick={(e)=>deletePodcast(data._id)}  >delete</button> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
