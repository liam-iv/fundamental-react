import React, {useState} from 'react';
import {PostItem} from "../components/Post";

import './styles/index.css';
import {PostList} from "../components/PostList";

const App = () => {
const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Golang', body: 'Description'},
    {id: 3, title: 'Java', body: 'Description'},
    {id: 4, title: 'TypeScript', body: 'Description'},
]);
    return (
        <div className='App' >
            <PostList posts={posts} title="Post's List"/>
        </div>
    );
};

export default App;