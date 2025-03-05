import React from "react";

const StudentProfile = () => {
    const student = {
        personalDetail: {
            name: 'roshan raj',
            gender: 'male',
            email: "rohsn@gmail.com",
            phone: '9326827804',
            dob: '20-12-2025',
            profilePics: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kcj0Y8YSA16GQR0c9Wso6-s0iMdLEy6dNw&s'
        },
        address: {
            at: 'purebahuriya',
            city: 'bhadohi',
            district: 'banras',
            state: 'up',
            country: 'india',
            pincode: 565646

        },
        education: {
            qualification: "mca",
            university: 'manipal university',
            state: 'rajshthan',
            country: 'indiap',
            
        }
    }
    return (
        <div className="sp-wrapper">
            <div className="sp-header">
              <img alt="profile" src={student.personalDetail.profilePics}/>
                <div className="sp-pd-box">
             <h2>{student.personalDetail.name}</h2>
             <p>Gender: {student.personalDetail.gender}</p>
             <p>Email: {student.personalDetail.email}</p>
             <p>Phone:+ {student.personalDetail.phone}</p>
             <p>Dob: {student.personalDetail.dob}</p>

                </div>
            </div>
            <div className="sp-info">
            <div className="address-box">
              <h2>Address</h2>
              <p>At: {student.address.at}</p>
              <p>City:{student.address.city}</p>
              <p>Dstrict:{ student.address.district}</p>
              <p>State: {student.address.state}</p>
              <p>Country: {student.address.country}</p>
              <p>Pinode: {student.address.pincode}</p>   
            </div>

            <div className="address-box">
              <h2>Education</h2>
              <p>Qualification: {student.address.qualification}</p>
              <p>University:{student.address.university}</p>
              <p>State: {student.address.state}</p>
              <p>Country: {student.address.country}</p>
               
            </div>
            </div>
            
        </div>
    )
}
export default StudentProfile;