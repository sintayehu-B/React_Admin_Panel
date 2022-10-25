import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import {useState} from "react"
const New = ({inputs, title}) => {
  const [file,setFile] = useState("")

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title"> {title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file) : "https://media.istockphoto.com/vectors/no-image-available-picture-coming-soon-missing-photo-image-vector-id1379257950?b=1&k=20&m=1379257950&s=170667a&w=0&h=RyBlzT5Jt2U87CNkopCku3Use3c_3bsKS3yj6InGx1I="} alt="" className="image" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file" >
                 Image    <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}} />
              </div>
              {inputs.map((input)=>(

              <div className="formInput" key={input.id}>
                <label htmlFor=""> {input.label}</label>
                <input type={input.text} placeholder={input.placeholder} />
              </div>
              ))}
             
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New