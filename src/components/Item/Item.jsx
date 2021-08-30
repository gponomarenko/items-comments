import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './item.css';

export const Item = ({
  id,
  message,
  selectItem,
  deleteItem,
  showCommentsNumber,
}) => (
  <li
    className="item__link
    item
    list-group-item
    d-flex
    justify-content-flex-start align-items-center"
  >
    <Link
      className="item__link"
      to={`/items-comments/${id}`}
      onClick={() => selectItem(id)}
    >
      {`${message} `}
      <span className="item__badge badge badge-primary badge-pill">
        {showCommentsNumber(id)}
      </span>
    </Link>
    <button
      className="btn btn-outline-danger w-25"
      type="button"
      onClick={() => deleteItem(id)}
    >
      Delete
    </button>
  </li>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  showCommentsNumber: PropTypes.func.isRequired,
};
