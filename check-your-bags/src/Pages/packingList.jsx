import '../Styles/PackingList.css' 
import React from 'react';
import { useState } from 'react';





export default function PackingList() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    

    function isPacked(i) {
        setItems
    }

    function addItem() {

        if(newItem.trim() !== "") {
        setItems(items => [...items, newItem]);
        setNewItem("")
        }else {
            alert('Please enter an item!')
        }

    }


    function deleteItem(index) {

        const updatedItems = items.filter((element, i) => i !== index);
        setItems(updatedItems)
        alert("This item has been removed!");


    }

    return (
        <div className="packingList">
            <h1>My Packing List</h1>

            <div>
                <input 
                type='text'
                maxLength="20"
                placeholder='Enter an item...'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                />
                <button 
                className='add-button'
                onClick={addItem}
                >Add</button>
            </div>

            <ol>
                {items.map((item, index) => <li key={index}> 
                    <span className="text">{item}</span>
                    <button
                    className="delete-button"
                    onClick={() => deleteItem(index) }
                    >🗑️</button>
                    {/*  <button
                    className="edit-button"
                    onClick={() => editItem(index)}
                    >✏️</button> */}
                </li>)} 
            </ol>
           
        </div>
    );
}