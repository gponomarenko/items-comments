import React from 'react';
import './comment.css';
import cn from 'classnames';

export const Comment = ({ message, index }) => (
  <>
    <li
      className="comment
      item
      list-group-item
      d-flex
      justify-content-flex-start
      align-items-flex-start"
    >
      <div className="comment__status">
        <div className={cn({
          comment__box: true,
          'comment__box--odd': index % 2 === 0,
          'comment__box--even': index % 2 !== 0,
        })}
        />
      </div>
      <div className="comment__body">
        {message}
      </div>
    </li>
  </>
);
