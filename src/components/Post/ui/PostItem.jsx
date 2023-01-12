import React from 'react';

import './PostItem.css'
import MyButton from "../../UI/button/MyButton";

export const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div className='post__body'>
                    {props.post.body}
                </div>
            </div>
                <div className='wrapper__button'>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
        </div>
    );
};