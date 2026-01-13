import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TaskList from './assets/pages/TaskList'
import AddTask from './assets/pages/AddTask'
import Navbar from './assets/components/NavBar'
import { useContext } from 'react'
import { ContextProvider, useGlobal, GlobalContext } from "./contexts/GlobalContext.jsx";

function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new" element={<AddTask />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
