const AddCourse = () => {
    return (
        <div className="add-course-wrapper">
            {/* <h2>Add New Course</h2> */}
            <form className="add-course-form">
                <input placeholder="Course Name" />
                <input placeholder="Price" />
                <input placeholder="Discount %" />
                <input placeholder="Description" />
                <button type="submit">Add Course</button>
            </form>
        </div>
    )
}
export default AddCourse