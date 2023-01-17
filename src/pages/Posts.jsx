import React, {useEffect, useRef, useState} from 'react';

import '../app/styles/index.css';
import {PostList} from "../components/PostList";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {MyModal} from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import {MySelect} from "../components/UI/select/MySelect";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    useObserver(lastElement, isPostLoading, page < totalPages, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true);
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
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

    return (
        <div className='App'>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultName='Количество элементов на странице'
                options={[
                    {value: 3, name: '3'},
                    {value: 5, name: '5'},
                    {value: 15, name: '15'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post's List"/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
            {isPostLoading &&
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>Загрузка постов...</h1>
            }
            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}
            />
        </div>);
};
export default Posts;