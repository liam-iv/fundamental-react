import React, {useState} from 'react';
import {PostItem} from "../components/Post";

import './styles/index.css';
import {PostList} from "../components/PostList";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const App = () => {
const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'Golang', body: 'Description'},
    {id: 3, title: 'Java', body: 'Description'},
    {id: 4, title: 'TypeScript', body: 'Description'},
]);
    return (
        <div className='App' >
            <MyInput type='text' placeholder='Post name'/>
            <MyInput type='text' placeholder="Post description"/>
            <MyButton>Add</MyButton>
            <PostList posts={posts} title="Post's List"/>
        </div>
    );
};

export default App;