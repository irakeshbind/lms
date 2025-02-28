import { useLocation, useParams } from "react-router-dom"

const CourseDetails =()=>{
    const {id} = useParams();
    console.log(id)
    const location = useLocation()
    console.log(location.state)
    return(
        <h1>courseDetails</h1>
      )
  }
  export default CourseDetails