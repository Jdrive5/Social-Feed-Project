import { useState } from "react";

const Buttons = (props) => {

    const [likeButton, setLikeButton] = useState('inactive');
    const [dislikeButton, setDislikeButton] = useState('inactive');

    function handleLike(likeButton){
        if (likeButton === 'inactive'){
            setLikeButton('activeLike');
            setDislikeButton('inactive');
        }
        else{
            setLikeButton('inactive');
        }
}

    function handleDislike(dislikeButton){
        if (dislikeButton === 'inactive'){
            setDislikeButton('activeDislike');
            setLikeButton('inactive');
        }
        else{
            setDislikeButton('inactive');
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