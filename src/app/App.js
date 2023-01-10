import React, {useMemo, useState} from 'react';

import './styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: '1Description'},
        {id: 2, title: 'Golang', description: '3Description'},
        {id: 3, title: 'Java', description: '2Description'},
        {id: 4, title: 'TypeScript', description: '4Description'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(item => item.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortAndSearchPosts} title="Post's List"/>
        </div>
    );
};

export default App;