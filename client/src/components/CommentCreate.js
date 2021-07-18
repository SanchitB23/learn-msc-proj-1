import React, {useState} from 'react';
import axios from "axios";

const CommentCreate = ({postId}) => {
  const [content, setContent] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    await axios.post(`http://posts.com:81/posts/${postId}/comments`, {
      content
    })
    setContent('')
  }

  return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="comment">New Comment</label>
            <input type="text" className="form-control" value={content}
                   onChange={event => setContent(event.target.value)}/>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
};

export default CommentCreate;
