import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/bookings" className="btn btn-header">
                  <FaCalendarAlt />
                  <span>Bookings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
