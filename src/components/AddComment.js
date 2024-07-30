import React,{useState} from 'react'
import {
    Link
  } from "react-router-dom";
const AddComment=() =>{

  // const [showInput, setInput] = useState(false);
  // const [showComment, setComments] = useState(" ");

  // const handleAdd = () => {
  //   let newComments = {
  //     id: Date.now(),
  //     text: showComment,
  //     replies: []
  //   }
  //   handleAddComments(comments.id, newComments);
  //   setInput(false);
  // }


  return (
    <>
      <section className='leave-comment'>
        <p><span>Leave</span>&nbsp; <span>A</span>&nbsp; <span>Comment</span></p>
        <div className='comments-section-hr comment-section-hr-leave-a-comment'></div>

        <input type="text" placeholder='Full Name' className='leave-comment-name-inp' />
        <br />
        <textarea name="" id="" cols="87" rows="6" placeholder='Your Message' className='leave-comment-message-inp' ></textarea>

        <Link href="">
          <div className='add-comment'>Add Comment&nbsp;&nbsp;<span>&#8637;</span></div>
        </Link>

        <div className='comments-ending-hr ending-hr-add-comments'></div>
      </section>
    </>
  )
}

export default AddComment;
