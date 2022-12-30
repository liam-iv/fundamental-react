import React from 'react';

import './PostItem.css'
import MyButton from "../../UI/button/MyButton";

export const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.item.id}. {props.item.title}</strong>
                <div className='post__description'>
                    {props.item.body}
                </div>
            </div>
                <div className='wrapper__button'>
                    <MyButton>Delete</MyButton>
                </div>
        </div>
    );
};

// export default PostItem;