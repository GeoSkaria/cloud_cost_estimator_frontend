import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EstimatorForm from './components/EstimatorForm';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/form' element={<EstimatorForm />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
