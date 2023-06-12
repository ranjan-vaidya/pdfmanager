import React from 'react'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addCommentOnPost, getAllPosts } from '../../../Actions/Post';
import Loader from '../../Loader';

import "./Post.css"
import { Avatar, Button, Typography, Dialog } from '@mui/material'
import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
  } from "@mui/icons-material";
import CommentCard from '../../CommentCard/Commentcard';

const Products = ({setPost, setPdfUrl}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()

  const [commentValue, setCommentValue] = useState("")
  const [commentToggle, setCommentToggle] = useState(false)
  const [currentpost, setCurrentPost] = useState([])
  const [posts, setPosts] = useState([])

  const {loading, posts: apiPosts, error} = useSelector(state => state.allpost)
  console.log(posts)

  //Comment handler
  const addCommentHandler = async (e) => {
    e.preventDefault()
    await dispatch(addCommentOnPost(currentpost._id, commentValue))
    await dispatch(getAllPosts())
    setCommentToggle(false)
  }

  useEffect(()=>{
    setPosts(apiPosts)
  },[apiPosts])

  useEffect(()=>{
    dispatch(getAllPosts())

    if(error){
      toast.error(error);
      dispatch({
        type:"clearError"
      })
    }

  },[error, dispatch])
  return (loading? <Loader /> :
    <div className='mt-6'>
      <p className='font-bold text-2xl ml-2 md:ml-4'>All Documents</p>

      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-4'> */}
      <div className='flex flex-wrap items-center justify-center'>

        {posts && posts.map((post,i)=>{
          if(currentpost){
            // if(currentpost._id && post._id ==currentpost._id){
            //   setCurrentPost(post)
            // }
            console.log("currentpost",currentpost)
          }
          return (
          <div 
            className='relative shadow-lg rounded-md md:h-[348px] md:w-[282px] m-6' 
            key={i}
          >
            <img 
              src={post.image.url} 
              alt={post.title} 
              className='rounded-md h-[348px] w-[282px] object-cover hover:cursor-pointer'
              onClick={()=>{
                console.log('pdf div url',post.image.url);
                setPost(post.image.url);
                navigate(`/pdf`);
                // if(setPdfUrl){
                //   console.log("Pdf URL set successfully")
                //   setPdfUrl(post.image.url);
                // } 
              }}
            />
            {/* <p className={`absolute bottom-0 ${showModal? "" : "z-10"} bg-white w-full px-1 text-center py-2 rounded-b-md`}>{movie.title}</p> */}
            <div className={`absolute bottom-0 ${location.pathname==="/dashboard/products"? "z-10" : ""} bg-white w-full px-3 text-left py-2 rounded-b-md`}>
              {/* <p className='text-lg font-semibold'>₹ {post.price}</p> */}
              <p>Item name: {post.title}</p>
              <p
                className='hover:cursor-pointer'
                onClick={()=>{
                  setCurrentPost(post)
                  console.log("Selected post",post)
                  setCommentToggle(true)
                }}
              >
                View comments
              </p>
            </div>
          </div>
        )})}

        {/* Dialogue box to show user comments */}
        <Dialog 
          open={commentToggle} 
          onClose={()=>setCommentToggle(false)}
        >
          <div className='DialogBox'>
            <Typography variant="h4">Comments:</Typography>
            <form action="" className="commentForm" onSubmit={addCommentHandler}>
              <input 
              type="text" 
              value={commentValue} 
              onChange={(e)=>setCommentValue(e.target.value)} 
              placeholder="Comment here.."
              required
            />

            <Button type="submit" variant="contained">Add</Button>
            </form>

            {currentpost && currentpost.comments && currentpost.comments.length > 0 ? currentpost.comments.map((comment) => (
              <CommentCard 
                key={comment.user}
                commentId = {comment.user}
                comment = {comment.comment}
                name= {comment.user.name}
                avatar= {comment.user.avatar.url}
                // avatar= {"hhjbj"}
                userId={comment.user}
                postId={currentpost._id}
                isAccount={true}
                // page={page}
              />
            )) : <Typography>No comments yet</Typography>}
          </div>
        </Dialog>

        {posts && posts.length===0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>No posts found..</p>}

      </div>
      <Outlet />
    </div>
  )
}

export default Products
