const Content =()=>{
    const content =[
        {
            id:1,
            title:'lecture 1',
            description:"introduction to mern stack development",
            thumnail:"https://i.ytimg.com/vi/h8yNJjwijjI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAOBZnc_7Qs8QBxzwbEGySSwHanTQ"
        },
        {
            id:2,
            title:'lecture 2',
            description:"introduction to mern stack development",
            thumnail:"https://i.ytimg.com/vi/h8yNJjwijjI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAOBZnc_7Qs8QBxzwbEGySSwHanTQ"
        },
        {
            id:3,
            title:'lecture 3',
            description:"introduction to mern stack development",
            thumnail:"https://i.ytimg.com/vi/h8yNJjwijjI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAOBZnc_7Qs8QBxzwbEGySSwHanTQ"
        },
        {
            id:4,
            title:'lecture 4',
            description:"introduction to mern stack development",
            thumnail:"https://i.ytimg.com/vi/h8yNJjwijjI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAOBZnc_7Qs8QBxzwbEGySSwHanTQ"
        },
        {
            id:5,
            title:'lecture 5',
            description:"introduction to mern stack development",
            thumnail:"https://i.ytimg.com/vi/h8yNJjwijjI/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAOBZnc_7Qs8QBxzwbEGySSwHanTQ"
        }
    ]
    return(
       <div className="content-wrapper">
        <div className="content-header">
            <h1>MERN Stack Development</h1>
            <button>Upload Content</button>
        </div>
        
             <form  className="upload-contant-form">
                <input type='text' placeholder="video Title"/>
                <textarea style={{padding:10,border:'1px solid #eee'}} placeholder="Description"></textarea>
                <input type='file'/>
                <div className="upload-contant-btn-box">
                <button style={{backgroundColor:'royalblue'}} className="upload-button" type='button'>submit</button>
                <button style={{backgroundColor:'red'}} className="close-button" type='button'>Close</button>
                </div>
             </form>
      

        <div className="content-box">
             {
                content.map((video)=>{
                    return(
                       <div className="video-container" key={video.id}>
                             <img alt='thumbnail' src={video.thumnail}/>
                             <div className="video-detail-box">
                                <h3>{video.title}</h3>
                                <p>{video.description}</p>
                             </div>
                             <div className="video-btn-box">
                                <button>Edit</button>
                                <button>Delete</button>
                             </div>
                        </div> 
                    )
                })
             }
        </div>

       </div>
    )
}
export default Content