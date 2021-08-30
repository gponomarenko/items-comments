import React from 'react';
import { Item } from '../Item';
import './itemlist.css';

export const ItemList = ({
  selectItem,
  addItem,
  handleChange,
  items,
  deleteItem,
  activeItemId,
  inputItem,
  showCommentsNumber,
}) => (
  <>
    <div>
      <h2>Items</h2>
    </div>
    <div className="form__container">
      <form
        onSubmit={e => addItem(e)}
        className="additem"
      >
        <input
          className="form-control w-75"
          onChange={handleChange}
          value={inputItem}
          placeholder="add your item here..."
        />
        <button type="submit" className="btn btn-success">
          Add new
        </button>
      </form>
    </div>
    <ul className="list-group list-group-flush">
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          message={item.message}
          selectItem={selectItem}
          deleteItem={deleteItem}
          showCommentsNumber={showCommentsNumber}
          activeItemId={activeItemId}
        />
      ))
      }
    </ul>
  </>
);
