import React, { useState } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import { ItemList } from './components/ItemList';
import { CommentList } from './components/CommentList';

function App() {
  const [items, setItems] = useState([
    {
      message: 'first message', id: 1,
    }, {
      message: 'second message', id: 2,
    },
  ]);
  const [comments, setComments] = useState([
    {
      comment: 'first comment on message 1', itemId: 1, id: 1,
    }, {
      message: 'second comment on message 1', itemId: 1, id: 2,
    },
  ]);
  const [activeItemId, setActiveItemId] = useState(0);
  const [inputItem, setInputItem] = useState('');

  const selectItem = (itemId) => {
    setActiveItemId(itemId);
  };

  const clearItemInput = () => setInputItem(prev => '');

  const addItem = (event) => {
    event.preventDefault();
    if (!inputItem.length) {
      return null;
    }

    if (inputItem.length) {
      setItems(prev => (
        [...prev,
          {
            message: inputItem,
            id: prev[prev.length - 1].id + 1,
          },
        ]
      ));
    }

    clearItemInput();
  };

  const deleteItem = (idNumber) => {
    return (
      setItems(prev => prev.filter(item => item.id !== idNumber))
    );
  };

  // const addComment = (event) => {
  //   event.preventDefault();
  //   if (!inputItem.length) {
  //     return null;
  //   }

  //   return (
  //     setItems(prev => (
  //       [...prev,
  //         {
  //           message: inputItem,
  //           id: prev[prev.length - 1].id + 1,
  //         },
  //       ]
  //     ))
  //   );
  // };

  const handleChange = (event) => {
    setInputItem(event.target.value);
  };

  return (
    <div className="App">
      <div className="App__sidebar">
        <h1>DAIRY APP</h1>
        <p>Comments with no sense</p>
      </div>
      <div className="App__main">
        <div className="App__items">
          <p>
            <ItemList
              selectItem={selectItem}
              addItem={addItem}
              handleChange={handleChange}
              items={items}
              deleteItem={deleteItem}
            />
          </p>
        </div>
        <div className="App__comments">
          <Route path="/comments">
            <CommentList />
          </Route>
        </div>
      </div>

    </div>
  );
}

export default App;
