import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
const Comments = ({ comments, handleAddComments, handleDeleteComment }) => {

  const [showInput, setInput] = useState(false);
  const [showComment, setComments] = useState(" ");

  const handleAdd = () => {
    let newComments = {
      id: Date.now(),
      text: showComment,
      replies: []
    }
    handleAddComments(comments.id, newComments);
    setInput(false);
  }

  return (
    <>

      {/* <section className='leave-comment'>
        <p><span>Leave</span>&nbsp; <span>A</span>&nbsp; <span>Comment</span></p>
        <div className='comments-section-hr comment-section-hr-leave-a-comment'></div>

        <input type="text" placeholder='Full Name' className='leave-comment-name-inp' />
        <br />
        <textarea name="" id="" cols="87" rows="6" placeholder='Your Message' className='leave-comment-message-inp'></textarea>

        <Link href="">
          <div className='add-comment'>Add Comment&nbsp;&nbsp;<span>&#8637;</span></div>
        </Link>

        <div className='comments-ending-hr ending-hr-add-comments'></div>
      </section> */}


      {/* <section className='comments-section'> */}
      <section className={`${comments.text && 'comments-section'}`}>
        {/* <div className='comments-section-header'>COMMENTS</div> */}
        {/* <p>4 Comments</p> */}
        <div className='comments-section-hr'></div>
        <div className='comments-total'>
          <div className='comments-total-img'><img src="./images/atish.png" alt="" /></div>
          <div className='blogdata-coments-article'>
            <div className='comments-name'>Atish Basak</div>
            <div className='comments-date-time-seciton'>
              <div className='comments-date-time comments-time'>5:56&nbsp;pm</div>
              <div className='comments-date-time comments-date'>april 20, 2024</div>
            </div>
            <div className='comment'>{comments.text}</div>
            {showInput && <input type='text' autoFocus className='reply-comments-temporary' onClick={(e) => setComments(e.target.value)} />}
            <div>
              {showInput ? (
                <>
                  <button className='button-comments-add' onClick={handleAdd}>Add</button>
                  <button className='button-comments-cancle' onClick={() => setInput(false)}>Cancle</button>
                </>
              ) : (
                comments.text ? (
                  <button className='button-comments-delete' onClick={() => handleDeleteComment(comments.id)}>Delete</button>
                ) : null
              )}
              {/* {showInput && <button className='button-comments-add' onClick={handleAdd}>Add</button>}
              {showInput && <button className='button-comments-cancle' onClick={() => setInput(false)}>Cancle</button>} */}
            </div>
          </div>
          <div className='comments-reply-section'>
            <Link href="" onClick={() => setInput(true)}>
              <div><img src="./images/arrow.png" alt="" /></div>
              <div>Reply</div>
            </Link>
          </div>
        </div>
        {/* <div className='nested-comments'>
          {comments?.replies?.map((ele) => (
            <Comments key={ele.id} comments={ele} handleAddComments={handleAddComments} handleDeleteComment={handleDeleteComment} />
          ))}
        </div> */}
        {/* <div className='comments-ending-hr'></div> */}
      </section>
    </>
  )
};

export default Comments;
