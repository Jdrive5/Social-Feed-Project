import { useState } from "react";

const Buttons = (props) => {

    const [likeButton, setLikeButton] = useState('like');
    const [dislikeButton, setDislikeButton] = useState('dislike');

    function handleLike(likeButton){
        if (likeButton === 'like'){
            setLikeButton('liked');
            setDislikeButton('dislike');
        }
        else{
            setLikeButton('like');
        }
}

    function handleDislike(dislikeButton){
        if (dislikeButton === 'dislike'){
            setDislikeButton('disliked');
            setLikeButton('like');
        }
        else{
            setDislikeButton('dislike');
        }
}

    return (
        <div>
            <div className="likeButton">
                <button type="toggle" className={likeButton} onClick={handleLike}>{props.likeButton}</button>
            </div>
            <div className="dislikeButton">
                <button type="toggle" className={dislikeButton} onClick={handleDislike}>{props.DislikeButton}</button>
            </div>
        </div>
    )

}

export default Buttons