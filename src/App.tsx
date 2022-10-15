import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import './App.css';
import UserPicker from './components/UserPicker';
import BookablesPage from './pages/BookablesPage';

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
              <li>
                <Link to="bookables" className="btn btn-header">
                  <FaDoorOpen />
                  <span>Bookables</span>
                </Link>
              </li>
              <li>
                <Link to="users" className="btn btn-header">
                  <FaUsers />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </nav>
          <UserPicker />
        </header>
      </div>

      <Routes>
        <Route path="/bookings" />
        <Route path="/bookables" element={<BookablesPage />} />
        <Route path="/users" />
      </Routes>
    </Router>
  );
}

export default App;
