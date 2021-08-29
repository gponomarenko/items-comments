import React from 'react';
import './comment.css';

export const Comment = (props) => {
  return (
    <>
      <div className="comment">
        <div className="comment__status">
          <div className="comment__box" />
        </div>
        <div className="comment__body">
          comment body
        </div>
      </div>
    </>
  );
};
