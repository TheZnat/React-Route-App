import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import SinglePage from "./Pages/SinglePage";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginPage from "./Pages/LoginPage";

import Layout from "./Components/Layout";

import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
                        <Route path="blog" element={<BlogPage/>}/>
                        <Route path="blog/:id" element={<SinglePage/>}/>
                        <Route path="blog/:id/edit" element={<EditPost/>}/>
                        <Route path="blog/new" element={
                            <RequireAuth>
                                <CreatePost/>
                            </RequireAuth>
                        }/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
