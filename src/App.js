import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import SelectColor from './SelectColor';
import Square from './Square';
import Input from './Input';
import Rectangle from './Rectangle';
import apiRequest from './apiRequest'; // Assuming you have an apiRequest function to handle API calls

function App() {

  const API_URL = 'http://localhost:3500/items';

  // const [items, setItems] = useState([
  //   { id: 1, checked: false, item: 'add some dummy text here' },
  //   { id: 2, checked: false, item: 'Item 2' },
  //   { id: 3, checked: false, item: 'Item 3' },
  // ]);
  const [items, setItems] = useState([]);//JSON.parse(localStorage.getItem('shoppinglist')) || []

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const [colorValue, setColorValue] = useState('');

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
    //setTimeout(() => fetchItems(), 2000);

  }, []);

  const addItem = async (item) => {
    // const newItemObj = { id: items.length + 1, checked: false, item: item };
    //const updatedItems = [...items, newItemObj];
    //setAndSaveItems(updatedItems);
    //setItems(updatedItems);

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }

  }

  /*
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }*/

  const handleCheck = async (id) => {

    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    console.log('reqUrl:', reqUrl);



    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);

  }

  const handleDelete = async (id) => {
    const newItems = items.filter(item => item.id !== id);
    //setAndSaveItems(newItems);
    setItems(newItems);
    setSearch(''); // Clear search when an item is deleted


    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    // Clear the input field after adding the item
    // setNewItem(''); // This line is moved to the end of the function`
    setNewItem('');
  }



  return (
    <div className="App">

      {/* <Square colorValue={colorValue} />
      <Rectangle colorValue={colorValue} /> */}

      {/* <Input colorValue={colorValue} setColorValue={setColorValue} /> */}
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />


      {/* <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} /> */}
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: 'red' }}>Error: {fetchError}</p>}

        {!fetchError && !isLoading && <Content
          items={items.filter(item => item.item.toLowerCase().includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      {/* <SelectColor /> */}
      <Footer length={items.length} />
    </div>
  );
}


export default App;
