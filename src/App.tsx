
import Header from 'components/header/Header'
import BusInform from 'pages/BusInformPage'
import MainPage from 'pages/MainPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/busInform" element={<BusInform />} />
      </Routes>
    </Router>
  )
}

export default App;
