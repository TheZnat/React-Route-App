import React from 'react';
import {useAuth} from "../hook/useAuth";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const {signout} = useAuth()
    const navigation = useNavigate()

    return (
        <div>
            <h1>Create a post</h1>
            <button
                onClick={() => signout(() => navigation('/', {replace: true}))}>
                Login out
            </button>
        </div>
    );
};

export default CreatePost;