import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const AddCourse = () => {
    const [description, setDescription] = useState('');
    const [courseName, setCourseName] = useState('');
    const [price, setPrice] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [imageUrl, setImageURl] = useState(null);



    const fileHandler = (e) => {
        // console.log(e.target.files[0])
        setThumbnail(e.target.files[0])
        setImageURl(URL.createObjectURL(e.target.files[0]))
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(courseName, description, price, discount, thumbnail)
    }

    return (
        <div className="add-course-wrapper">
            {/* <h2>Add New Course                         </h2> */}
            <form onSubmit={submitHandler} className="add-course-form">
                <input onChange={(e)=>{setCourseName(e.target.value)}} placeholder="Course Name" />
                <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" />
                <input onChange={(e)=>{setDiscount(e.target.value)}} placeholder="Discount %" />
                <input onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" />
                {/* <ReactQuill theme="snow" value={description} onChange={setDescription} /> */}
                {/* <br/> */}
                <input id='input-thumb' onChange={fileHandler} type='file' />
                <div className='upload-thumb'>
                    <button onClick={() => { document.getElementById("input-thumb").click() }} className='upload-profile-btn'>Upload Course Thumbnail</button>
                    {imageUrl && <img alt='logo' src={imageUrl} />}
                </div>

                <button className='add-course-button' type="submit">Add Course</button>
            </form>
        </div>
    )
}
export default AddCourse