import React from 'react';
import {PostItem} from "../../Post";

export const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(item =>
                <PostItem item={item} key={item.id}/>
            )}
        </div>
    );
};