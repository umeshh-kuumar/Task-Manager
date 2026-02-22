import React, { useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi';

const TodoListInput = ({ todoList, setTodoList }) => {
    const [option, setOption] = useState("");

    // Function to handle adding an option
    const handleAddOption = () => {
        if (option.trim()) {
            setTodoList([...todoList, option.trim()]);
            setOption("");
        }
    };

    // Function to handle deleting an option
    const handleDeleteOptions = (index) => {
        const updateArr = todoList.filter((_, idx) => idx !== index);
        setTodoList(updateArr);
    };

    return (
        <div>
            {todoList.map((item, index) => {
                <div
                    key={item}
                    className=''
                >
                    <p className=''>
                        <span className=''>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        {item}
                    </p>
                    <button className=''
                        onClick={() => {
                            handleAddOption(index);
                        }}
                    >
                        <HiOutlineTrash className='' />

                    </button>
                </div>
            })}
        </div>
    )
}

export default TodoListInput