import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import UserPicker from './components/UserPicker';
import BookablesPage from './pages/BookablesPage';
import UsersPage from './pages/UsersPage';
import BookingsPage from './pages/BookingsPage';

type INavItem = {
  readonly linkTo: string;
  readonly children: React.ReactNode;
};

function NavItem({ linkTo, children }: INavItem) {
  return (
    <li className="my-0 ml-0 mr-4 inline-block p-0">
      <Link
        to={linkTo}
        className="ml-2 box-border inline-flex w-36 cursor-pointer
                  items-center justify-center rounded-3xl 
                  border border-solid border-secondary bg-primary
                  px-6 py-2 text-base text-text-light
                  transition-all duration-500 ease-in-out hover:border-text-light
                  hover:shadow-[0_2px_5px_rgba(0,0,0,0.4)]
                  "
      >
        {children}
      </Link>
    </li>
  );
}

function App() {
  return (
    <div>
      <Router>
        <nav>
          <header className="m-0 flex items-center justify-between bg-primary p-4">
            <ul className="m-0 list-none p-0">
              <NavItem linkTo="/bookings">
                <FaCalendarAlt className="mr-1" />
                <span>Bookings</span>
              </NavItem>
              <NavItem linkTo="/bookables">
                <FaDoorOpen className="mr-1" />
                <span>Bookables</span>
              </NavItem>
              <NavItem linkTo="/users">
                <FaUsers className="mr-1" />
                <span>Users</span>
              </NavItem>
            </ul>
            <UserPicker />
          </header>
        </nav>

        <Routes>
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/bookables" element={<BookablesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<Navigate to="/bookings" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
