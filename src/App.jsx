import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TaskListPage from './assets/pages/TaskListPage.jsx'
import AddTaskPage from './assets/pages/AddTaskPage.jsx'
import Navbar from './assets/components/NavBar'
import { ContextProvider } from "./contexts/GlobalContext.jsx";

function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskListPage />} />
          <Route path="/new" element={<AddTaskPage />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
