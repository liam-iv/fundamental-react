import React, {useMemo, useState} from 'react';

import './styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {MyModal} from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: '1Description'},
        {id: 2, title: 'Golang', description: '3Description'},
        {id: 3, title: 'Java', description: '2Description'},
        {id: 4, title: 'TypeScript', description: '4Description'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false)

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
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className='App'>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
                <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortAndSearchPosts} title="Post's List"/>
        </div>
    );
};

export default App;