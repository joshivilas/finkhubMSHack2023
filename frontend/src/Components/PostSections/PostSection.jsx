import React from 'react'
import PostMenu from './PostMenus/PostMenu'
import './PostSection.css'
import PostCard from './Posts/PostCard'
import Posts from './Posts/Posts'
export default function PostSection() {
  return (
    <div className='PostSection'>
        <PostMenu/>
        <Posts/>

    </div>
  )
}
