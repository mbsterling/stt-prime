import { Link, NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/pages/signedin"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                All Signed In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages/StudentAthletes"
                className={({ isActive }) => (isActive ? classes.active : undefined)}
              >
                All Student Athletes
                </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default MainNavigation;