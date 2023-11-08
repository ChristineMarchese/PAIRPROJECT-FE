
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import IndexPage from './Components/IndexPage';
import NewPage from './Components/NewPage';
import ShowPage from './Components/ShowPage';
import EditPage from './Components/EditPage';
import PageNotFound from "./Components/PageNotFound"
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import { Navigate } from 'react-router-dom';

// import './App.css'

function App() {
 

  return (
    <>
     <Router>
      <NavBar/>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/cities" element={<IndexPage/>}/>
       <Route path="/cities/:id" element={<ShowPage/>}/>
       <Route path="/cities/new" element={<NewPage/>}/>
       <Route path="/cities/:id/edit" element={<EditPage/>}/>
       <Route path="/notfound" element={<PageNotFound/>}/>
       <Route path="*" element={<Navigate to="/notfound"/>} />
       </Routes>
     </Router> 
    </>
  );
}

export default App
