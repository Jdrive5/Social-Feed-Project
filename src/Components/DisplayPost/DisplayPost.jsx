
const DisplayPost = (props) => {
    return (
        <div className="Display_Card">
            {props.parentPost.map((post) => {
                return (
                    <Post post={post}></Post>
                );
            })}
            </div>
    );    
}
