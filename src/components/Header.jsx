import { useNavigate } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <header className="header">
      <h1>☁️ Cloud Cost Estimator</h1>
      <button onClick={handleClick}>Select Resources</button>
    </header>
  );
}

export default Header;
