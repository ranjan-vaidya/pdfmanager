import axios from "axios"

  //Create new post
  export const createNewPost = (title, image, description, category, brand, condition, price ) => async (dispatch) => {

    try {

        dispatch({
            type:"newPostRequest",
        })

        const {data} = await axios.post("/api/v1/post/upload",{
            title,
            image,
            description,
            category,
            brand,
            condition,
            price
        },{
            headers:"Content-Type:application/json"
        })

        dispatch({
            type:"newPostSuccess",
            payload:data.message
        })

        
    } catch (error) {
        dispatch({
            type:"newPostFailure",
            payload:error.response.data.message
        })
    }
  }


  //All posts
  export const getAllPosts = () => async (dispatch) =>{

    try {

        dispatch({
            type:"allPostRequest"
        })

        const {data} = await axios.get("/api/v1/allposts")

        dispatch({
            type:"allPostSuccess",
            payload: data.posts                                    //Refer backend whenever necessary
        })
        
    } catch (error) {

        dispatch({
            type:"allPostError",
            payload:error.response.data.message
        })
        
    }
}

  //Delete post
  export const deletePost = (id) => async (dispatch) => {

    try {

        dispatch({
            type:"deletePostRequest",
        })

        const {data} = await axios.delete(`/api/v1/post/${id}`)

        dispatch({
            type:"deletePostSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"deletePostFailure",
            payload:error.response.data.message
        })
    }
  }

  //add/update comment on Post
export const addCommentOnPost = (id, comment) => async (dispatch) =>{

    try {

        dispatch({
            type:"addCommentRequest"
        })
        const {data} = await axios.put(`/api/v1/post/comment/${id}`,{
            comment,                                                                //Body
        },{
            headers:"Content-Type:application/json"                                 //Put and post me lgta hai ye MAYBE to define body type
        })

        dispatch({
            type:"addCommentSuccess",
            payload:data.message,
        })


        
    } catch (error) {
        dispatch({
            type:"addCommentFailure",
            payload:error.response.data.message
        })
    }
}

//Delete Comment on post
export const deleteCommentOnPost = (id, commentId) => async (dispatch) => {
    try {
      dispatch({
        type: "deleteCommentRequest",
      });
  
      const { data } = await axios.delete(`/api/v1/post/comment/${id}`, {
        data: { commentId },
      });
      dispatch({
        type: "deleteCommentSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "deleteCommentFailure",
        payload: error.response.data.message,
      });
    }
  };
