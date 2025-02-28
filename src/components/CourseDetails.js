import { useParams } from "react-router-dom"

const CourseDetails =()=>{
    const {id} = useParams();
    console.log(id)
    return(
        <h1>courseDetails</h1>
      )
  }
  export default CourseDetails