import '../Styles/PackingList.css' 
import React from 'react';
import { useState } from 'react';





export default function PackingList() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
    

    //updates the array when new item is added 
    function addItem() {

        if(newItem.trim() !== "") {
        setItems(items => [...items, newItem]);
        setNewItem("")
        }else {
            alert('Please enter an item!')
        }

    }

    //deletes the item from the array when user clicks on the trash icon
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
                onChange={(e) => setNewItem(e.target.value)} //allows users to enter in the item to be added to the display
                />
                <button 
                className='add-button'
                onClick={addItem} //adds the item by calling the function
                >Add</button>
            </div>

            <ol>
                {items.map((item, index) => <li key={index}>  {/* maps the items by using a key to delete when user selects the trashcan button */}
                    <span className="text">{item}</span>
                    <button
                    className="delete-button" 
                    onClick={() => deleteItem(index) }
                    >🗑️</button>
                </li>)} 
            </ol>
           
        </div>
    );
}