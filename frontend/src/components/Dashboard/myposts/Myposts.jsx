import React from 'react'
import { useEffect } from 'react';

import { toast } from 'react-toastify';
import {useDispatch, useSelector} from "react-redux"
import { getAllMyPosts } from '../../../Actions/User';
import Loader from '../../Loader';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Myposts = ({setPost}) => {

  const dispatch = useDispatch();
  const location = useLocation()
  const navigate = useNavigate()


  const {loading, posts, error} = useSelector(state => state.allMyPosts)
  console.log(posts)

  useEffect(()=>{
    dispatch(getAllMyPosts())

    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })
    }

  },[error, dispatch])

  return (loading? <Loader /> :
    <div className='mt-6'>
      <p className='font-bold text-2xl ml-2 md:ml-4'>{location.pathname === "/dashboard/myposts"? "My Documents " : "Product details: "}</p>

      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4'> */}
      {location.pathname === "/dashboard/myposts" && <div className='flex flex-wrap items-center justify-center'>

        {posts && posts.map((post,i)=>(
          <div 
            className='relative shadow-lg rounded-md md:h-[348px] md:w-[282px] m-6 hover:cursor-pointer' 
            // onClick={()=>{navigate(`/dashboard/myposts/${post._id}`); setPost(post)}}
            key={i}
          >
            

            <img 
              src={post.image.url} 
              alt={post.title} 
              className='rounded-md h-[348px] w-[282px] object-cover' 
            />
            <div className={`absolute bottom-0 z-10 bg-white w-full px-3 text-left py-2 rounded-b-md`}>
              <p>Item name: {post.title}</p>
            </div>
          </div>
        ))}

        {posts && posts.length===0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>You've not made any post yet..</p>}

      </div>}

      <Outlet />
    </div>
  )
}

export default Myposts
