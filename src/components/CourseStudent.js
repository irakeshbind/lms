const CourseStudent = () => {
    const studentlist = [
        {

            id: 125,
            fullName: 'rakesh',
            phone: '9326827804',
            email: 'rakesh@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpKvJ-2mw_38DdZLgdwmmCgjpu3RvKGHqkA&s'
        },
        {

            id: 165,
            fullName: 'ajit',
            phone: '8354063869',
            email: 'ajit@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdl1Qi4s61DFzf292IYutoG5QU9JxE4YxFA&s'
        },
        {

            id: 170,
            fullName: 'amar',
            phone: '9592784519',
            email: 'amar@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqpXqhUvAxSKy5POIO9WXcy_QdF81eVLSqQ&s'
        },
        {

            id: 185,
            fullName: 'sahil',
            phone: '8954627585',
            email: 'sahil@gmail.com',
            profilePic: 'https://images.careerindia.com/img/2014/11/27-indianstudents2.jpg'
        },
        {

            id: 125,
            fullName: 'rakesh',
            phone: '9326827804',
            email: 'rakesh@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpKvJ-2mw_38DdZLgdwmmCgjpu3RvKGHqkA&s'
        },
        {

            id: 165,
            fullName: 'ajit',
            phone: '8354063869',
            email: 'ajit@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdl1Qi4s61DFzf292IYutoG5QU9JxE4YxFA&s'
        },
        {

            id: 170,
            fullName: 'amar',
            phone: '9592784519',
            email: 'amar@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqpXqhUvAxSKy5POIO9WXcy_QdF81eVLSqQ&s'
        },
        {

            id: 185,
            fullName: 'sahil',
            phone: '8954627585',
            email: 'sahil@gmail.com',
            profilePic: 'https://images.careerindia.com/img/2014/11/27-indianstudents2.jpg'
        }
    ]
    return (
        <div className="sl-wrapper">
            <input className="sl-search" placeholder="search-student" />
            <div className="sl-box">
                <table>
                    <thead>
                        <tr>
                            <th>Profile Pic</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentlist.map((student) => {
                                return (
                                    <tr>
                                        <td><img src={student.profilePic} /></td>
                                        <td>{student.fullName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td><button>Edit</button></td>
                                        <td><button>Delete</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CourseStudent