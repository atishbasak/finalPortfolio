import React, { useState } from 'react'
// import {
//   Link
// } from "react-router-dom";
import Footer from './Footer';
import Comments from './Comments';
import { commentData } from './CommentsData';
import UseCustomHook from './UseCustomHook';
import AddComment from './AddComment';



export default function BlogDataTotal() {

  const [comments,setComments] = useState(commentData);
  const {addComment, deleteComment} = UseCustomHook();
  const handleAddComments = (commentId,comment)=>{
    const updatedTree = addComment(comments,commentId,comment);
    setComments(updatedTree);
  }

  const handleDeleteComment = (commentId)=>{
    const updatedTree = deleteComment(comments,commentId);
    setComments(updatedTree);
  }


  return (
    <>
      <header className='header-blogdata'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium molestiae, saepe doloribus ratione possimus!</p>
        <div className='blogdata-date'>
          <div>april 20, 2024</div>
          <div>&#9642;&nbsp;By Atish Basak</div>
          <div></div>
        </div>
        <img src="./images/web works 1.png" alt="" />
      </header>

      <section className='blog-writting-section'>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ab voluptatem. Facere eligendi consectetur tempore aperiam voluptatem ipsa perferendis, alias totam maxime eum adipisci reiciendis. Voluptates quam, ea libero consectetur veniam sed odit sint rem harum dignissimos quia aut, dolore accusantium quas dolor soluta quisquam ad ut laudantium sapiente tempora qui? Nemo veritatis debitis qui fugit, sapiente totam accusamus, blanditiis est, sed eum consequatur! Saepe optio accusantium nemo distinctio, culpa dignissimos harum non soluta neque iusto. Culpa, dicta sapiente laboriosam perspiciatis dolores ipsa mollitia atque veritatis quaerat nemo possimus, vel soluta vero fugit ea quidem minima a fuga itaque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laborum impedit sequi iusto sit voluptatem? Quasi, illo fuga? Fugiat quia laboriosam iure, vitae voluptatum alias maxime deleniti non recusandae cupiditate, quibusdam praesentium nobis nam vel quaerat, corporis ab ut inventore ex error veritatis quo reiciendis ad natus. Dolores, sapiente voluptate!</div>

        <div className='blog-coloured-section'><i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quisquam a nesciunt? Molestiae deserunt obcaecati, rem voluptatem voluptatum architecto quod nostrum iste assumenda ad eius culpa eum possimus illum provident ex, aliquid suscipit magnam eaque nesciunt eligendi dolor veritatis amet! Placeat aliquid ab asperiores omnis iure temporibus deserunt odit repellendus.</i></div>

        <div>--- &nbsp;Atish Basak</div>


        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ab voluptatem. Facere eligendi consectetur tempore aperiam voluptatem ipsa perferendis, alias totam maxime eum adipisci reiciendis. Voluptates quam, ea libero consectetur veniam sed odit sint rem harum dignissimos quia aut, dolore accusantium quas dolor soluta quisquam ad ut laudantium sapiente tempora qui? Nemo veritatis debitis qui fugit, sapiente totam accusamus, blanditiis est, sed eum consequatur! Saepe optio accusantium nemo distinctio, culpa dignissimos harum non soluta neque iusto. Culpa, dicta sapiente laboriosam perspiciatis dolores ipsa mollitia atque veritatis quaerat nemo possimus, vel soluta vero fugit ea quidem minima a fuga itaque aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laborum impedit sequi iusto sit voluptatem? Quasi, illo fuga? Fugiat quia laboriosam iure, vitae voluptatum alias maxime deleniti non recusandae cupiditate, quibusdam praesentium nobis nam vel quaerat, corporis ab ut inventore ex error veritatis quo reiciendis ad natus. Dolores, sapiente voluptate!</div>

      </section>

      <section className='second-img-section'>
        <img src="./images/sample 1.png" alt="" />
        <img src="./images/ssample 2.png" alt="" />
      </section>

      <section className='tech-mention-section'>
        <div>Technology Used</div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, magni.</p>
        <div className='source-code-total'>
          <div>Source Code</div>
          <img src="./images/arrow.png" alt="" className='arrow' />
          <img src="./images/github logo.png" alt="" className='source-code-total-github' />
          <div className='share-code-text'>Share</div>
          <div className='share-social-links-img'><img src="./images/facebook.png" alt="" /></div>
          <div className='share-social-links-img share-social-links-img-linkedin'><img src="./images/linked in.png" alt="" /></div>
          <div className='share-social-links-img share-social-links-img-twitter'><img src="./images/twitter.png" alt="" /></div>
          <div className='share-social-links-img share-social-links-img-insta'><img src="./images/insta.png" alt="" /></div>
        </div>
      </section>

      <AddComment key={comments.id} comments={comments} handleAddComments={handleAddComments} handleDeleteComment={handleDeleteComment}/>
      <Comments key={comments.id} comments={comments} handleAddComments={handleAddComments} handleDeleteComment={handleDeleteComment}/>

      {/* <section className='comments-section'>
        <p>4 Comments</p>
        <div className='comments-section-hr'></div>
        <div className='comments-total'>
          <div className='comments-total-img'><img src="./images/atish.png" alt="" /></div>
          <div className='blogdata-coments-article'>
            <div className='comments-name'>Atish Basak</div>
            <div className='comments-date-time-seciton'>
              <div className='comments-date-time comments-time'>8:16&nbsp;pm</div>
              <div className='comments-date-time comments-date'>april 20, 2024</div>
            </div>
            <div className='comment'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nisi ducimus sunt? Excepturi culpa iusto animi quos! Perferendis recusandae, necessitatibus ullam magnam obcaecati facere delectus hic dolorum voluptatum. Autem quis quisquam ipsam molestiae nisi temporibus ipsa placeat accusantium unde minima.</div>
          </div>
          <div className='comments-reply-section'>
            <Link href="">
              <div><img src="./images/arrow.png" alt="" /></div>
              <div>Reply</div>
            </Link>
          </div>
        </div>
        <div className='comments-ending-hr'></div>
      </section>


      <section className='leave-comment'>
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

      <Footer/>

    </>
  )
}
