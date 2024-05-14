import React from "react";
import Post from "./Post";

function Feed ({ posts}){
    return (
        <div>
            <h3>Feed</h3>
            {posts.map((post, index) => ( <Post key ={index} title={post.title} content={post.content} />))}
            </div>
    );
}
    export default Feed;
