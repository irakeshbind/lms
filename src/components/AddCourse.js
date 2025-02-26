import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const AddCourse = () => {
    // const [value, setValue] = useState('');
    const [profilepic, setProfilePic] = useState(null);
    const [imageUrl, setImageURl] = useState(null);



    const fileHandler = (e) => {
        // console.log(e.target.files[0])
        setProfilePic(e.target.files[0])
        setImageURl(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className="add-course-wrapper">
            {/* <h2>Add New Course</h2> */}
            <form className="add-course-form">
                <input placeholder="Course Name" />
                <input placeholder="Price" />
                <input placeholder="Discount %" />
                <input placeholder="Description" />
                {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
                {/* <br/> */}
                <input id='input-thumb' onChange={fileHandler} type='file' />
                <div className='upload-profile'>
                    <button onClick={() => { document.getElementById("input-thumb").click() }} className='upload-profile-btn'>Upload Course Thumbnail</button>
                    {imageUrl == null ? <img alt='logo' src={require('../assets/img3.png')} />
                        : <img alt='logo' src={imageUrl} />}
                </div>

                <button className='add-course-button' type="submit">Add Course</button>
            </form>
        </div>
    )
}
export default AddCourse