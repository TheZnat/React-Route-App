import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const EditPost = () => {
    const {id} = useParams()

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <h1>Edit post {id}</h1>
            <h2>Post text</h2>
            {posts && (
            <span>
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
            </span>
                )}
        </div>
    );
};

export default EditPost;