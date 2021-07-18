import React from 'react';

const CommentList = ({comments}) => {

  const renderedComments = comments.map((comment) => {
    let content;
    switch (comment.status) {
      case 'approved':
        content = comment.content
        break
      case 'pending':
        content = 'Awaiting Moderation'
        break
      case 'rejected':
        content = 'Rejected'
    }

    return <li key={comment.id}>{content}</li>
  })

  return (
      <div>
        {renderedComments}
      </div>
  );
};

export default CommentList;
