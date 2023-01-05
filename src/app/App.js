import React, {useState} from 'react';

import './styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: 'Description'},
        {id: 2, title: 'Golang', description: 'Description'},
        {id: 3, title: 'Java', description: 'Description'},
        {id: 4, title: 'TypeScript', description: 'Description'},
    ]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App' >
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title="Post's List"/>
        </div>
    );
};

export default App;