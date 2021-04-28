import axios from 'axios'
import react, { useState } from 'react'
import {Form,Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import Server from '../../../../../Server'
import Header from '../../../Header'


export default function AddNewPodcast(){

let history=useHistory()
  const[title,setTitle]=useState()
  const[description,setDescription]=useState()
  const[category,setCategory]=useState()
  const[files,setFiles]=useState()
  const[image,setImage]=useState()


  function handleChange(event){

    if(event.target.name=="title")
    {
      let title=event.target.value
      setTitle(title)
    }
    if(event.target.name=="description")
    {
      let description=event.target.value
      setDescription(description)
    }
if(event.target.name=="category")
{
       let category=event.target.value
       setCategory(category)
}




  }

function FileSubmit(event){

if(event.target.files[0])
{
  let file=event.target.files[0]
  let extension= event.target.files[0].type

  
  console.log("files",extension);


  setFiles(file)
}

}
function ImageSubmit(event){

  if(event.target.files[0])
  {
    let file=event.target.files[0]
    
console.log("the image is",file);
    setImage(file)
  }
}


  function FormSubmit(event){


    let data=new FormData()
    event.preventDefault()
    data.append('image',image)
    data.append("file",files)
    data.append('title',title)
    data.append('category',category)
    data.append('description',description)
    let jwt=localStorage.getItem('jwt')
    let userId=localStorage.getItem('userId')
data.append("jwt",jwt)
data.append('userId',userId)
 event.preventDefault()

console.log("datais this",data);

axios.post(Server+'/createPodcast',data).then((response)=>{

  console.log("this i s",response)
  if(response.status=="200")
  {
        toast.success("Posted Successfully")
        history.push('/')   
  }
  else if(response.status=='400')
  {
    toast.error("something went wrong please try again")
  }
})



  }



  
    return(
 
        <div>
                   <Header/>
            <div>
     
            </div>

            <div  className="container formcontainer"  id="formis">

<Form onSubmit={FormSubmit}>
  <p id="err"></p>

    <Form.Group  controlId="formGridEmail">
      <Form.Label >Enter a Title for your Podcast</Form.Label>
      <Form.Control type="text" id="tilte" name="title" placeholder="Enter a title for Your Podcast"  onChange={handleChange} />
    </Form.Group>

  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Add a Short Description</Form.Label>
    <Form.Control as="textarea" rows={3} id="description" name="description"  placeholder="Enter a Short Description" onChange={handleChange}/>
  </Form.Group>

  

  <Form.Row>
    

    <Form.Group  controlId="formGridState">
      <Form.Label>Select the Category of Podcast</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." id="category" name="category"onChange={handleChange}>
        <option>Choose...</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        
      </Form.Control>
    </Form.Group>
</Form.Row>

<Form.Group >
<Form.Label>Select the Thumbnail of podcast (jpg file)</Form.Label>

<Form.File id="exampleFormControlFile1" id="file" name="image" onChange={ImageSubmit} />

  </Form.Group>

  <Form.Group >
<Form.Label>Select Your Podcast File</Form.Label>

<Form.File id="exampleFormControlFile1"  id="file" name="file" onChange={FileSubmit} />

  </Form.Group>





  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        </div>
    )


    }