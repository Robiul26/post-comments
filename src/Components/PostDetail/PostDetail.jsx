import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const [detail, setDetail] = useState({});
    const [comments, setComments] = useState([]);
    const {postId} = useParams();
    // console.log(postId);

    useEffect(() => {
     getDetail()
    }, [])

    const getDetail = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = await res.json()
        setDetail(data)

        // const existComments = data.map(comments => {
        //       if (postId === comments.postId) {
        //         return {...comments}
        //       }
        //       return comments;
        //     });
        //     setDetail(existComments);
    }

    useEffect(() => {
       getComments();
    }, [])

    const getComments = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const data = await res.json()
        setComments(data)
    }
   
    return (
        <>            
         <div className='sm:px-20 px-4 flex flex-col gap-2 pb-10 pt-28'>
            <div className='border shadow-md rounded-md p-5 bg-green-300 dark:bg-green-700 mb-5'>
                <h2 className='font-bold sm:text-2xl text-xl uppercase pb-5 dark:text-white'>{postId}. {detail.title}</h2>
                <p className='dark:text-white'>{detail.body}</p>
            </div>
            {/* <h1 className=' py-5 text-xl font-bold dark:text-white'>Unread Comments{`(${comments.length})`}</h1> */}
            

            {
                comments.map((comment, index) => <Comments 
                    key={index}
                    num={index}
                    name={comment.name}
                    email={comment.email}
                    body={comment.body}
                    /> )
            }


         </div>
         
        </>
    );
};

export default PostDetail;