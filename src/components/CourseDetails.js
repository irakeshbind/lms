import { useLocation, useParams } from "react-router-dom"

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id)
    const location = useLocation()
    console.log(location.state)
    return (
        <div className="course-detail-wrapper">
            <div className="cd-header">
                <div className="cd-header-left">
                    <h2 className="cd-heading">MERN Stack Complete Master Course</h2>
                    <p>Created At :-23/10/2025</p>
                    <div className="cd-header-btn-box">
                        <button className="cd-edit-btn">Edit coursee</button>
                        <button className="cd-delete-btn">Delete course</button>
                    </div>
                </div>
                <div className="cd-header-right">
                    <img className="cd-thumbnail" src={location.state.thumbnail}/>
                    <button>Manage Content</button>
                </div>

            </div>
        </div>
    )
}
export default CourseDetails