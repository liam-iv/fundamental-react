import React, {useEffect, useMemo, useState} from 'react';

import './styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {MyModal} from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {getPageCount, getPagesArray} from "../utils/pages";

const App = () => {
    const [posts, setPosts] = useState([{id: 1, title: 'Java', body: 'language'}]);

    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    let pagesArray = getPagesArray(totalPages);

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true);
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setIsPostLoading(false);
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    const changePage = (page) => {
        setPage(page)
    }

    return (<div className='App'>
        <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {isPostLoading ?
            <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>Загрузка постов...</h1> :
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post's List"/>
        }
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? "page page__current" : "page"}>
                    {p}
                </span>
                )}
        </div>
    </div>);
};
export default App;