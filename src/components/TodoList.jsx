import React, { useState } from 'react';
import { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';



function TodoList() {
  const now=dayjs();
  const [todo, setTodo] = useState({ description: '', date: now.format('DD.MM.YYYY'), priority: '' });
  const [dateInput, setDateInput] = useState(now);
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  
  

 

 

  const columns = [
    { field: 'description', sortable: true, filter: true, floatingFilter: true },
    { field: 'date', sortable: true, filter: true, floatingFilter: true },
    {
      field: 'priority',
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) => (params.value === 'High' ? { color: 'red' } : { color: 'black' }),
    },
  ];

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  };

  const inputChanged = (event) => {
      setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const dateInputChanged = (date) => {
      console.log(date);
     setTodo({ ...todo, date: date.format('DD.MM.YYYY')});
     setDateInput(date);
    };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter((todo, index) => index !== parseInt(gridRef.current.getSelectedNodes()[0].id))
      );
    } else {
      alert('You have to select a row');
    }
  };

  return (
      <><div>
              
        </div><div className='todo'>
                    <h1>Todolist</h1>
                    <TextField onChange={inputChanged} label='Description' name='description' value={todo.description} />
                    <DatePicker inputFormat='ddMMyyyy' onChange={dateInputChanged} label="DD/MM/Year" name="date" value={dateInput} />
                    <TextField onChange={inputChanged} label='Priority' name='priority' value={todo.priority} />
                    <Button onClick={addTodo} variant='contained' color='success' size='small'>
                          Add
                    </Button>
                    <Button onClick={deleteTodo} variant='contained' color='error' size='small' startIcon={<DeleteIcon />}>
                          Delete
                    </Button>

                    <div className='ag-theme-material'
                          style={{ height: '700px', width: '70%', margin: 'auto' }}>

                          <AgGridReact
                                ref={gridRef}
                                animateRows={true}
                                onGridReady={params => gridRef.current = params.api}
                                rowSelection="single"
                                columnDefs={columns}
                                rowData={todos}>
                          </AgGridReact>
                    </div>


              </div></>
      );
};

export default TodoList;