import React, { Component, useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import NavBar from './Components/NavBar/NavBar';



function App() {

  const [posts, setPosts] = useState([{name: "Justin Driver", post: "Happy Hacking!"}])

  function addNewPost (post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);

  }

  return (
    <div>
      <CreatePostForm addNewPost={addNewPost} />
      <DisplayPost parentPost={posts} />
    </div>
  );
}

export default App;
