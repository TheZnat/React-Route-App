import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom";

const SinglePage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState(null)
    const navigation = useNavigate()

    const goBack = () => navigation(-1)
    const goHome = () => navigation('/', {replace: true})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id])


    return (
        <div>
            {posts && (
                <div>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                    <Link to={`/blog/${id}/edit`}>Edit this post</Link>

                </div>
            )}
            <div>
                <button onClick={goBack}>Back</button>
                {/* Bad approach */}
                <button onClick={goHome}>Home</button>
            </div>

        </div>
    );
};

export default SinglePage;