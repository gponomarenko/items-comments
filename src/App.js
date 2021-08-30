import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route } from 'react-router-dom';
import { ItemList } from './components/ItemList';
import { CommentList } from './components/CommentList';

function App() {
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
    const setValue = (value) => {
      try {
        const valueToStore
        = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

  const [items, setItems] = useLocalStorage('items', [{
    message: 'first message', id: 1,
  }, {
    message: 'second message', id: 2,
  }]);
  const [comments, setComments] = useLocalStorage('comments', [{
    comment: 'first comment on message 1', itemId: 1, id: 1000,
  }, {
    comment: 'second comment on message 1', itemId: 1, id: 1001,
  },
  {
    comment: 'first comment on message 2', itemId: 2, id: 1002,
  }]);
  const [activeItemId, setActiveItemId] = useState(0);
  const [inputItem, setInputItem] = useState('');
  const [inputComment, setInputComment] = useState('');

  const selectItem = (itemId) => {
    setActiveItemId(itemId);
  };



  const addItem = (event) => {
    event.preventDefault();
    if (!inputItem.length) {
      return null;
    }

    if (inputItem.length && items.length) {
      setItems(prev => (
        [...prev,
          {
            message: inputItem,
            id: prev[prev.length - 1].id + 1,
          },
        ]
      ));
    }

    if (inputItem.length && !items.length) {
      setItems(prev => (
        [...prev,
          {
            message: inputItem,
            id: 1,
          },
        ]
      ));
    }

    setInputItem('');
    setActiveItemId(0);
    console.log('adding item');
  };

  const findItemPlace = id => (
    items
      .indexOf(items.find(item => item.id === id))
  );

  const deleteItem = (id) => {
    setComments(prev => prev.filter(comment => comment.itemId !== id));
    setItems(prev => prev.filter(item => item.id !== id));
    console.log(items, comments);
  };

  const addComment = (event) => {
    if (!inputComment.length) {
      return null;
    }

    if (event.keyCode === 13 && event.ctrlKey && inputComment.length) {
      if (comments.length) {
        setComments(prev => (
          [...prev,
            {
              comment: inputComment,
              itemId: activeItemId,
              id: prev[prev.length - 1].id + 1,
            },
          ]
        ));
        console.log('adding next comment');
      }

      if (!comments.length) {
        setComments(prev => (
          [...prev,
            {
              comment: inputComment,
              itemId: activeItemId,
              id: 1000,
            },
          ]
        ));
        console.log('adding first comment');
      }

      setInputComment('');
    }
  };

  const handleChange = (event) => {
    setInputItem(event.target.value);
  };

  const showCommentsNumber = id => (
    comments
      .filter(comment => comment.itemId === id)
      .length
  );

  return (
    <div className="App">
      <div className="App__sidebar container bg-dark">
        <h1 className="App__sidebar--title text-white">DAIRY APP</h1>
        <p className="text-white-50">Comments with no sense</p>
        <div>
          <Route path="/items-comments">
            <Link to="/items-comments">
            <button type="button" className="btn btn-light">
              GO HOME
            </button>
            </Link>
          </Route>

        </div>
      </div>
      <div className="App__main container-fluid">
        <div className="App__items shadow p-3 mb-5 bg-white">
          <div>
            <ItemList
              selectItem={selectItem}
              addItem={addItem}
              handleChange={handleChange}
              items={items}
              deleteItem={deleteItem}
              inputItem={inputItem}
              showCommentsNumber={showCommentsNumber}
            />
          </div>
        </div>
        <div className="App__comments shadow p-3 mb-5 bg-white">
          <Route path={`/items-comments/${activeItemId}`}>
            <CommentList
              comments={comments}
              addComment={addComment}
              activeItemId={activeItemId}
              inputComment={inputComment}
              setInputComment={setInputComment}
              findItemPlace={findItemPlace}
            />
          </Route>
        </div>
      </div>

    </div>
  );
}

export default App;
