import React from 'react';

import './PostItem.css'

export const PostItem = (props) => {
    console.log(props)
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.item.id}. {props.item.title}</strong>
                <div className='post__description'>
                    {props.item.body}
                </div>
            </div>
                <div className='wrapper__button'>
                    <button className='delete__button'>Delete</button>
                </div>
        </div>
    );
};

// export default PostItem;