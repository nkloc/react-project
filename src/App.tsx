import React from 'react'
import './App.css'
import PostsList from './components/PostsList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditPost from './components/EditPost'
import Header from './private/Header'
import UserProfile from './components/UserProfile'
import AllUsers from './components/AllUsers'
import EditUser from './components/EditUser'

const RouterApp = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<PostsList />} />
                <Route path="/post/new" element={<EditPost />} />
                <Route path="/post/:id" element={<EditPost />} />
                {/* <Route path="/users/:id" element={<UserProfile />} /> */}
                <Route path="/users" element={<AllUsers />} />
                <Route path="/user/new" element={<EditUser />} />
                <Route path="/user/:id" element={<EditUser />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default RouterApp
