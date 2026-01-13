import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TaskList from './assets/pages/TaskList'
import AddTask from './assets/pages/AddTask'
import Navbar from './assets/components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new" element={<AddTask />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
