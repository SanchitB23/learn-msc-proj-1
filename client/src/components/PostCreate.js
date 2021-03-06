import React, {useState} from 'react';
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://posts.com:81/posts/create', {
      title
    })
    setTitle('')
  }

  return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name="title" value={title}
                   onChange={event => setTitle(event.target.value)}/>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
  );
};

export default PostCreate;
