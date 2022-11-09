import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './views/Intro'
import Todos from './views/Todos'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route exact path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  )
}
export default App
