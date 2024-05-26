import React, { useState, useEffect } from 'react';
import styles from '../styles/TodoList.module.scss';
import { FaTrash, FaUndo } from 'react-icons/fa';


const TodoList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']); // Inicializando con 4 elementos
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [history, setHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setHistory([...history, items]);
    setItems([...items, inputValue]);
    setInputValue('');
    closeModal();
  };

  const deleteSelectedItems = () => {
    setHistory([...history, items]);
    setItems(items.filter((item, index) => !selectedItems.includes(index)));
    setSelectedItems([]);
  };

  const deleteItem = (index, event) => {
    event.stopPropagation(); // Prevent triggering parent events
    if (window.confirm("¿Seguro que quieres eliminar este elemento?")) {
      setHistory([...history, items]);
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const toggleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const undo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setItems(previousState);
    setSelectedItems([]);
  };

  useEffect(() => {
    // Limpiar input cuando el modal se cierra o abre
    if (!isModalOpen) {
      setInputValue('');
    }
  }, [isModalOpen]);

  return (
    <>
      {items.length > 0 && (
        <div className={styles.container}>
          <h2>This is a technical proof:</h2>
          <p className={styles.introtxt}>Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.</p>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => toggleSelectItem(index)}
                onDoubleClick={(e) => deleteItem(index, e)}
                className={`${styles.listItem} ${selectedItems.includes(index) ? styles.listItemSelected : ''}`}
              >
                <span className={styles.listItemText}>{item}</span>
                <FaTrash onClick={(e) => deleteItem(index, e)} className={styles.iconButton} />
              </li>
            ))}
          </ul>
          <div className={styles.inputGroup}>
            <button onClick={undo} className={styles.buttonUndo}>
              <FaUndo />
            </button>
            <button onClick={deleteSelectedItems} className={styles.buttonDelete}>Delete</button>
            <button onClick={openModal} className={styles.buttonAdd}>Add</button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className={styles.modalBackground} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Add item to list</h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.input}
              placeholder="Type the text here..."
            />
            <div className={styles.inputGroup}>
              <button onClick={addItem} className={styles.buttonAdd}>Add</button>
              <button onClick={closeModal} className={styles.buttonCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;