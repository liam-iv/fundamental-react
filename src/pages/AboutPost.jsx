import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";

const AboutPost = () => {
    const [post, setPost] = useState({});
    const [isPostLoading, setIsPostLoading] = useState(false);

    const params = useParams();


    async function fetchPostById(id) {
        setIsPostLoading(true);
        const response = await PostService.getById(id)
        setPost(response.data)
        console.log(response.data)
        setIsPostLoading(false);
    }

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            {isPostLoading ?
                <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '60px'}}>Загрузка постов...</h1>
                :
                <div>
                    <h1>Страница {params.id} поста</h1>
                    <div>{post.id}. {post.title}</div>
                </div>

            }
        </div>
    )
        ;
};

export default AboutPost;