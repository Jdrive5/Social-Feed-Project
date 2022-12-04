import Post from '../Post/Post';


const DisplayPost = (props) => {
    return (
        <div class='Display_Form'>
            {props.parentPost.map((post) => {
                return (
                    <Post post={post}></Post> 
             );    
        })}
        </div>
    );    
};

export default DisplayPost;
