import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';



function App() {

  const [posts, setPosts] = useState([{name: "Justin Driver", post: "Happy Hacking!"}])

  function addNewPost (post){

    let tempPosts = [post, ...posts];

    setPosts(tempPosts);
    

  }

  return (
    
      <div>
        <div>
          <header>
            <NavBar />
          </header>
          <br/>
        </div>
          <div>
              <CreatePostForm addNewPost={addNewPost} />
          </div>
          <br/>
            <div>
              <DisplayPost parentPost={posts} />
            </div>
          </div>
    
  );
}

export default App;
