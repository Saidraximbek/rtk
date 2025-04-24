import React from 'react'
import PostsList from './PostsList'
const Home = () => {
  return (
    <div className='flex flex-col gap-7 items-center justify-center mt-6'>
      <h1 className='text-4xl font-bold'>Posts</h1>
      
<PostsList />
      
    </div>
  )
}

export default Home