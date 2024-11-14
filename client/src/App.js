import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import './App.css';
// import JobList from './components/JobList';
// import JobDetail from './components/JobDetail';
// import JobForm from './components/JobForm';
// import jobsData from './constants/data';
// import { getData } from './services/api';
import Home from './components/Home/home'
import Login from './components/accounts/login'
import Loading from './components/Loading/loading'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="container mt-5">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
