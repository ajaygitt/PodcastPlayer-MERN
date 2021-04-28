import axios from 'axios'
import react, { useEffect, useState } from 'react'
import Server from '../../../../Server'
import '../MyProfile/MyProfile.css'
import $ from "jquery";
import { toast } from 'react-toastify';


export default function MyProfile(){



useEffect(()=>{



let jwt=localStorage.getItem('jwt')
let id=localStorage.getItem('userId')

axios.get(Server+'/myProfile?jwt='+jwt).then((data)=>{

    console.log("ok",data.data);
    document.getElementById('name').innerHTML=data.data.Name
    document.getElementById('name2').innerHTML=data.data.Name
    document.getElementById('userid').innerHTML=data.data._id
    document.getElementById('phone').innerHTML=data.data.Phone

})

})
function fileData(event){

    let data=new FormData()

let file=event.target.files[0]
let id=localStorage.getItem('userId')
console.log("the id is",id);
data.append('id',id)
data.append("image",file)
console.log("the file is",data);


axios.post(Server+'/changeProfilePicture',data).then((response)=>{

    console.log("ok posted",response);
    if(response.data=="success")
    {
        toast("profile pic changed successfully")

     document.getElementById('profilePicture').src=Server+'/image/profile-pictures/608149b9d5bb26415c6b825b.jpg'
    }
    else
    {
        toast('something went wrong')
    }


})
}



return(
    <div>
    
 <h1> <u>My Profile </u> </h1>


<div>

<div class="container emp-profile">
    
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img id="profilePicture" className="image" src={Server+'/image/profile-pictures/608149b9d5bb26415c6b825b.jpg'} alt=""/>
                            <form encType="multipart/form-data" id="upload_form"  >
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" id="profilePic"  onChange={fileData} />
                            </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5 >
                            Name:  <span id="name"> </span>
                                    </h5>
                                    
                                  
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="userid">Kshiti123</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="name2">Kshiti Ghelani</p>
                                            </div>
                                        </div>
                                        {/* <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="phone">kshitighelani@gmail.com</p>
                                            </div>
                                        </div> */}
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p id="phone">123 456 7890</p>
                                            </div>
                                        </div>
                                       
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  
        </div>
</div>



    
    
    </div>
)


}