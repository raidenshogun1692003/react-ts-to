import './styles/App.css'
import HomePage from './HomePage'
import { Route, Routes } from "react-router-dom";
import NoPage from './NoPage';
import Download from './Download'
import Important from './components/Important';
import MyDay from './components/MyDay';
import Planned from './components/Planned';
import Task from './components/Task';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/myday" element={<MyDay />} />
        <Route path="/important" element={<Important />} />
        <Route path="/plan" element={<Planned />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<NoPage />} />

      </Routes >
    </>
  )
}

export default App
