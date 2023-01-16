import React from 'react';

import './PostItem.css';
import MyButton from "../../UI/button/MyButton";
import {useHistory} from "react-router-dom";

export const PostItem = (props) => {
    const router = useHistory();

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div className='post__body'>
                    {props.post.body}
                </div>
            </div>
            <div className='delete__button'>
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};