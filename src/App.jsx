import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, getAllData, updateTodo } from './features/todo/todoSlice.js';

const App = () => {
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleChange = (e) => {
    const { name , value } = e.target;
    setTodo({...todo, [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo.id){
      dispatch(updateTodo(todo));
    }else {
      dispatch(createTodo(todo));
    }

    setTodo({});
  }

  const handleEdit = (todo) => {
    setTodo(todo);
  }

  useEffect(() => {
    dispatch(getAllData());
  },[]);

  return (
    <>
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-4'>
          <form action="" method='post' onSubmit={handleSubmit}>
            <h2 className='text-center mb-3'>Add Todo</h2>
            <div className='mb-3'>
              <label htmlFor="todo" className='form-label'>Todo</label>
              <input type="text" className='form-control' onChange={handleChange} value={todo.text || ""} name='text' id='todo' />
            </div>
            <div className='mb-3'>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-6'>
          <table className='table table-bordered table-striped table-hover caption-top'>
            <caption>
              <h2 className='text-center mb-3'>Todo Details</h2>
            </caption>
            <thead className='table-dark'>
              <tr>
                <th>Sr No.</th>
                <th>Todo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((value,index) => {
                  return (
                    <tr key={value.id}>
                      <td>{index + 1}</td>
                      <td>{value.text}</td>
                      <td>
                        <button type='button' className='btn btn-danger me-2' onClick={() => dispatch(deleteTodo(value.id))}>
                          Delete
                        </button>
                        <button type='button' className='btn btn-warning' onClick={() => handleEdit(value)}>
                          Update
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
