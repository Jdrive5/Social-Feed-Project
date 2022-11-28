
const DisplayPost = (props) => {
    return (
        <div>
            {props.parentPost.map((post) => {
                return (
                    <div className="bottom-line pad">
                        <table className="flex-container">
                            <thead>
                                <tr>
                                    <th className="change-name-size">{post.name}</th>
                                </tr>
                            </thead>
                            <tbody className="offset-post-content">
                                <tr>
                                    <td className="max-post-width">{post.post}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>        
             );    
        })}
        </div>
    );    
};

export default DisplayPost;
