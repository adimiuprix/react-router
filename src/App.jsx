
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Todolist from './components/TodoList';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NotFound } from './components/NotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Tabs, Tab } from '@mui/material';

function App( ) {
  return ( 
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
    <>
    <nav className="nav">
          <h1>React router</h1>
          <Tabs value={window.location.pathname}>
          
            <Tab label="Home" textColor="secondary" value="/" component={Link} to="/" />
            <Tab label="About" textColor="secondary" value="/about" component={Link} to="/about" />
            <Tab label="Contact" textColor="secondary" value="/contact" component={Link} to="/contact" />
            <Tab label="TodoList" textColor="secondary" value="/todolist" component={Link} to="/todolist" />
          </Tabs>
        </nav>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/todolist" element={<Todolist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
    </LocalizationProvider>
  );
}

export default App;
