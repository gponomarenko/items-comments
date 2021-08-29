import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

export const Item = ({ id, message, selectItem, deleteItem }) => {
  return (
    <>
      <div className="item">
        <Link to="/comments" onClick={() => selectItem(id)}>
          {message}
          <span>
            {`, item id = ${id}, badge # of comments`}
          </span>
        </Link>
        <button
          type="button"
          onClick={() => deleteItem(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};
