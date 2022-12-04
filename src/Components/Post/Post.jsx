import Buttons from "../Buttons/Buttons";


const Post = (props) => {
    return (
        <div>
            <h3>{props.post.name}</h3>
            <p>{props.post.post}</p>
            <Buttons/>
        </div>
    );
}

export default Post;