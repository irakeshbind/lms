import { useLocation, useNavigate, useParams } from "react-router-dom"

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id)
    const location = useLocation()
    console.log(location.state)
    const navigate = useNavigate();
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
                    <div className="price-detail-box">
                    <div className="price-discount">
                        <p>Price</p>
                        <h2>Rs.{location.state.price}</h2>
                    </div>
                    <div className="price-discount">
                    <p>Discount</p>
                    <h2>{location.state.discount}%</h2>
                    </div>
                    </div>
                </div>
                <div className="cd-header-right">
                    <img alt='thumnail' className="cd-thumbnail" src={location.state.thumbnail} />
                    {/* <p>RS. {(location.state.price * (100 - location.state.discount)) / 100} <span className="discount-text">{location.state.discount}% off</span></p> */}
                    <button onClick={()=>{navigate('/dashboard/content/'+id)}}>Manage Content</button>
                </div>

            </div >
            <div className="cd-detail-box">
               <h3 className="cd-description-heading">Course description</h3>
               <div className="cd-description" dangerouslySetInnerHTML={{__html:location.state.description}}></div>
            </div>
        </div>
    )
}
export default CourseDetails