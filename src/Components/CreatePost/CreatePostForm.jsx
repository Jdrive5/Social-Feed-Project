import React, { useState } from 'react';



const CreatePostForm = (props) => {

const [name, setName] = useState("");
const [post, setPost] = useState("");

function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        name: name,
        post: post,
    };
    console.log(newPost);
    props.createNewPostProperty(newPost)
}

return (
    <form onSubmit={handleSubmit}>
        <div className='Post_Card'>
            <label>Name</label>
            <input type='name' className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='post' className="form-control" value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='create' className='btn btn-primary'>Create</button>
        </div> 
    </form>
)

}

export default CreatePostForm;