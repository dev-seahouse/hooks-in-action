import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import UserPicker from './components/UserPicker';
import BookablesPage from './pages/BookablesPage';
import UsersPage from './pages/UsersPage';

interface INavItem {
  linkTo: string;
  children: React.ReactNode;
}

function NavItem({ linkTo, children }: INavItem) {
  return (
    <li className="my-0 ml-0 mr-4 inline-block p-0">
      <Link to={linkTo} className="btn btn-header">
        {children}
      </Link>
    </li>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="m-0 flex items-center justify-center p-4">
          <nav>
            <ul className="m-0 list-none p-0">
              <NavItem linkTo="/bookings">
                <FaCalendarAlt />
                <span>Bookings</span>
              </NavItem>
              <NavItem linkTo="/bookables">
                <FaDoorOpen />
                <span>Bookables</span>
              </NavItem>
              <NavItem linkTo="/users">
                <FaUsers />
                <span>Users</span>
              </NavItem>
            </ul>
          </nav>
          <UserPicker />
        </header>
      </div>

      <Routes>
        <Route path="/bookings" />
        <Route path="/bookables" element={<BookablesPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
