import React from 'react'
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ShowData from './components/ShowData';
import Showbackend from './components/Showbackend';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <div className='d-flex'>
              <Navbar.Brand href="/">Home</Navbar.Brand>
              <Navbar.Brand href="/showdata">ShowData</Navbar.Brand>
              <Navbar.Brand href="/showbackend">Showbackend</Navbar.Brand>
            </div>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/showdata' element={<ShowData />}></Route>
            <Route path='/showbackend' element={<Showbackend />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App