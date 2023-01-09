import React, {useState} from 'react';

import './styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";
import {MySelect} from "../components/UI/select/MySelect";

const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', description: '1Description'},
        {id: 2, title: 'Golang', description: '3Description'},
        {id: 3, title: 'Java', description: '2Description'},
        {id: 4, title: 'TypeScript', description: '4Description'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                value={selectedSort}
                defaultName='Сортировка:'
                onChange={sortPosts}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'description', name: 'По описанию'},
                ]}

            />
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts} title="Post's List"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    );
};

export default App;