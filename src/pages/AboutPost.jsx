import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";

const AboutPost = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [isPostLoading, setIsPostLoading] = useState(false);

    const params = useParams();


    async function fetchPostById(id) {
        setIsPostLoading(true);
        const response = await PostService.getById(id)
        setPost(response.data)
        setIsPostLoading(false);
    }
    async function fetchComments(id) {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    }

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            {isPostLoading ?
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>Загрузка постов...</h1>
                :
                <div>
                    <h1>Страница {params.id} поста</h1>
                    <div>{post.id}. {post.title}</div>
                     <h2>Комментарии:</h2>
            {comments.map(item =>
                <div style={{marginTop: '15px'}}>
                    <h5>{item?.email}</h5>
                    <div>{item?.body}</div>
                </div>
            )}
                </div>
            }
        </div>
    )
        ;
};

export default AboutPost;