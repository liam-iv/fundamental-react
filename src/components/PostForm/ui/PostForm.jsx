import React, {useState} from 'react';
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/button/MyButton";

export const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', description: ''})
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({title: '', description: ''});
    };

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type='text'
                placeholder='Post name'
            />
            <MyInput
                value={post.description}
                onChange={e => setPost({...post, description: e.target.value})}
                type='text'
                placeholder="Post description"
            />
            <MyButton onClick={addNewPost}>Add</MyButton>
        </form>
    );
};