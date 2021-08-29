import React from 'react';
import { Item } from '../Item';
import './itemlist.css';

export const ItemList = ({
  selectItem,
  addItem,
  handleChange,
  items,
  deleteItem,
}) => {
  return (
    <>
      <div>
        <h2 className="title">Items</h2>
      </div>
      <div className="additem">
        <form onSubmit={e => addItem(e)} className="additem__form">
          <input onChange={handleChange} />
          <button type="submit">
            Add new
          </button>
        </form>
      </div>
      <div>
        {items.map((item) => (
          <>
            <Item
              key={item.id}
              id={item.id}
              message={item.message}
              selectItem={selectItem}
              deleteItem={deleteItem}
            />
          </>
        ))
        }

      </div>
    </>
  );
};
