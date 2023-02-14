import { Link, NavLink } from 'react-router-dom';
import classes from '../MainNavigation/MainNavigation.module.css';

const PageNavigation = () => {
    return (
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            {/* <li>
              <NavLink
                to="/signedin"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                All Signed In
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/StudentAthletes"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                All Student Athletes
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default PageNavigation;