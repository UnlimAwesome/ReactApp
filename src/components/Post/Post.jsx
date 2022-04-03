import React from 'react';

const Post = ({post}) => {
    return (
        <div className="post">
            <h3 className="post_title">{post.title}</h3>
            <p className="post_body">{post.body}</p>
        </div>
    );
};

export default Post;