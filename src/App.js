import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';



function App() {

  const [post, setPosts] = useState([])

  function createNewPost(post){

    let tempPosts = [post, ...posts];

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
      <CreateNewPostForm createNewPostProperty = {createNewPost} />
  </div>
  <br/>
  <div>
      <DisplayPosts parentPosts = {posts} />
  </div>
</body>
  );
}

export default App;
