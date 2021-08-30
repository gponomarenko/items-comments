import React from 'react';
import { Comment } from '../Comment';
import '../Comment/comment.css';

export const CommentList = ({
  comments,
  addComment,
  activeItemId,
  inputComment,
  setInputComment,
  findItemPlace,
}) => (
  <>
    <h2>{`Comments #${findItemPlace(activeItemId) + 1}`}</h2>
    <div>
      {comments
        .filter(comment => comment.itemId === activeItemId)
        .map((comment, index) => (
          <React.Fragment key={comment.id}>
            <Comment
              message={comment.comment}
              index={index}
            />
          </React.Fragment>
        ))
      }
      <li
        className="item
        list-group-item
        d-flex
        justify-content-flex-start align-items-center
        comment"
      >
        <div className="comment__status">
          <div className="comment__box comment__box--add" />
        </div>
        <div className="comment__body">
          <textarea
            className="comment__input form-control"
            type="text"
            placeholder="add your comment and press Enter + CTRL"
            value={inputComment}
            onChange={e => (setInputComment(e.target.value))}
            onKeyDown={addComment}
          />
        </div>
      </li>
    </div>
  </>
);
