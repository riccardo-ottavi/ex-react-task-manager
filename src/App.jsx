import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import TaskListPage from './assets/pages/TaskListPage.jsx'
import AddTaskPage from './assets/pages/AddTaskPage.jsx'
import Navbar from './assets/components/NavBar'
import { ContextProvider } from "./contexts/GlobalContext.jsx";
import TaskDetailPage from './assets/pages/TaskDetaiPage.jsx'

function App() {


  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/new-task" element={<AddTaskPage />}/>
          <Route path="/tasks/:id" element={<TaskDetailPage />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
