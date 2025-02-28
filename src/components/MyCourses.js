import { useNavigate } from "react-router-dom"

const MyCourses =()=>{
    const navigate = useNavigate();
    const courses = [
        {
            id:0,
            courseName:'c++ master course',
            price:500,
            discount:20,
            thumbnail:'https://gogetgpt.com/files/img/1beb834ea28aa4d66bfd3852aea26c51.png'
        },
        {
            id:1,
            courseName:'python master course',
            price:3999,
            discount:10,
            thumbnail:'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'
        },
        {
            id:2,
            courseName:'iot from basic to advance',
            price:7999,
            discount:50,
            thumbnail:'https://static.vecteezy.com/system/resources/thumbnails/009/288/681/small/iot-internet-of-things-logo-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-everything-connectivity-device-concept-network-and-business-with-internet-illustration-vector.jpg'
        },
        {
            id:3,
            courseName:'Reactnaive',
            price:5999,
            discount:10,
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQRQtqf28ZmSfOqurZc6LjEkfuxBSsBOSIg&s'
        },
        {
            id:4,
            courseName:'mern stack',
            price:4099,
            discount:3,
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XsGy58iVDkzGX91ESK0nfFB6teEIheOYOg&s'
        },
        {
            id:0,
            courseName:'c++ master course',
            price:5999,
            discount:20,
            thumbnail:'https://gogetgpt.com/files/img/1beb834ea28aa4d66bfd3852aea26c51.png'
        },
        {
            id:1,
            courseName:'python master course',
            price:3999,
            discount:10,
            thumbnail:'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png'
        },
        {
            id:2,
            courseName:'iot from basic to advance',
            price:7999,
            discount:50,
            thumbnail:'https://static.vecteezy.com/system/resources/thumbnails/009/288/681/small/iot-internet-of-things-logo-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-everything-connectivity-device-concept-network-and-business-with-internet-illustration-vector.jpg'
        },
        {
            id:3,
            courseName:'Reactnaive',
            price:5999,
            discount:10,
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQRQtqf28ZmSfOqurZc6LjEkfuxBSsBOSIg&s'
        },
        {
            id:4,
            courseName:'mern stack',
            price:4099,
            discount:3,
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XsGy58iVDkzGX91ESK0nfFB6teEIheOYOg&s'
        }
    ]
    return(
      <div className="course-wrapper">
          {
            courses.map((course)=>{
                return(
                    <div onClick={()=>{navigate('/dashboard/course-detail/'+course.id)}} key={course.div} className="course-box">
                        <img alt="thumbnail" src={course.thumbnail}/>
                        <h2>{course.courseName}</h2>
                        <p>RS. {(course.price*(100-course.discount))/100} <span className="discount-text">{course.discount}% off</span></p>
                  </div>
                )
            })
          }
      </div>
    )
}
export default MyCourses