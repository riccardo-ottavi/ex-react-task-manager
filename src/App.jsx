import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TaskList from './assets/pages/TaskList'
import AddTask from './assets/pages/AddTask'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/new" element={<AddTask />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
