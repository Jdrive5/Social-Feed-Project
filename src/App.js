import React, { Component, useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPost from './Components/DisplayPost/DisplayPost';



function App() {

  const [post, setPosts] = useState([])

  function createNewPost(post){

    let tempPosts = [post, ...post];

    setPosts(tempPosts);

  }

  return (
<body>
  <div>
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <br/>
    </div>   
  </div>
  <div>
      <CreatePostForm createNewPostProperty = {createNewPost} />
  </div>
  <br/>
  <div>
      <DisplayPost parentPost={post} />
  </div>
</body>
  );
}

export default App;
